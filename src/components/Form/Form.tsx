import { useState, useEffect, useRef, useCallback } from 'react';
import Input from '../Input/Input';
import './Form.css';

export type Props = {
  submit: (teammate: ITeammate) => void;
  closeForm: () => void;
}

interface PersonData {
  firstName: string;
  lastName: string;
  birthday: string;
  firstNameError: string | undefined;
  lastNameError: string | undefined;
  birthdayError: string | undefined;
};

export default function Form({ submit, closeForm }: Props) {
  const [personData, setPersonData] = useState<PersonData>({
    firstName: '',
    lastName: '',
    birthday: '',
    firstNameError: undefined,
    lastNameError: undefined,
    birthdayError: undefined,
  });
  const personState = useRef<PersonData>(personData);

  const updateField = (e: React.ChangeEvent<HTMLInputElement>, field: string) => {
    setPersonData({ ...personData, [field]: e.target.value});
  };

  const validateName = useCallback((prop: string, errorMessage: string, field: string) => {
    const error = !!personData[prop as keyof PersonData] ? undefined : errorMessage;
    personState.current = { ...personState.current, [field]: error }
    setPersonData({ ...personState.current, [field]: error });
    return error;
  }, [personData])

  const getBirthdayError = useCallback(() => {
    const isEmpty = personData.birthday.length === 0;

    if (isEmpty) {
      return 'Birthday should not be empty';
    }

    const dateMaskRegExp = /^\d{2}\.\d{2}\.\d{4}$/;

    if (!dateMaskRegExp.test(personData.birthday)) {
      return 'Birthday should be written in DD.MM.YYYY format';
    }

    const daysInMonth: {[key: string]: number} = {
      1: 31,
      3: 31,
      4: 30,
      5: 31,
      6: 30,
      7: 31,
      8: 31,
      9: 30,
      10: 31,
      11: 30,
      12: 31,
    };

    const [day, month, year] = personData.birthday.split('.');

    const dayNumber = parseInt(day, 10);
    const monthNumber = parseInt(month, 10);
    const yearNumber = parseInt(year, 10);

    const now = new Date();

    if (yearNumber > now.getFullYear() ||
      (yearNumber === now.getFullYear() &&
        (monthNumber > now.getMonth() + 1 || (monthNumber === now.getMonth() + 1 && dayNumber > now.getDate())))
    ) {
      return 'Birthday cannot be in future';
    }
    const isLeapYear = yearNumber % 400 === 0 || (yearNumber % 100 !== 0 && yearNumber % 4 === 0);

    if (monthNumber > 12 ||
      (monthNumber !== 2 && dayNumber > daysInMonth[monthNumber]) ||
      (monthNumber === 2 && ((isLeapYear && dayNumber > 29) || dayNumber > 28))
    ) {
      return 'Birthday should be a valid date';
    }

    return undefined;
  }, [personData.birthday])

  const validateBirthday = useCallback(() => {
    const error = getBirthdayError();
    personState.current = { ...personState.current, birthdayError: error }
    setPersonData({...personState.current, birthdayError: error});
  }, [getBirthdayError])

  const checkForm = useCallback(() => {
    personState.current = { ...personData };
    validateName('firstName', 'First name should not be empty', 'firstNameError');
    validateName('lastName', 'Last name should not be empty', 'lastNameError');
    validateBirthday();

    if (personState.current.firstNameError || personState.current.lastNameError || personState.current.birthdayError) {
      return;
    }

    const [day, month, year] = personData.birthday.split('.');

    const dayNumber = parseInt(day, 10);
    const monthNumber = parseInt(month, 10);
    const yearNumber = parseInt(year, 10);

    const birthday = new Date(yearNumber, monthNumber - 1, dayNumber);

    const teammate = {
      name: `${personData.firstName} ${personData.lastName}`,
      birthday,
      joined: new Date(),
    };

    submit(teammate);
  }, [personData, submit, validateName,validateBirthday])

  useEffect(() => {
    const listener = (event: KeyboardEvent) => {
      if (event.code === "Enter") {
        console.log("Enter key was pressed.");
        event.preventDefault();
        checkForm();
      }
      if (event.code === "Escape") {
        console.log("Escape key was pressed.");
        event.preventDefault();
        closeForm();
      }
    };
    document.addEventListener("keydown", listener);
    return () => {
      document.removeEventListener("keydown", listener);
    };
  }, [checkForm, closeForm]);

  return (
    <div className="form-wrapper">
      <div className="form-close" onClick={closeForm}>&#10006;</div>
      <p className="form-comment">Write down teammate&apos;s name and birthday and submit</p>
      <Input
        id="first-name"
        label="First name:"
        value={personData.firstName}
        onChange={(value) => updateField(value, "firstName")}
        error={personData.firstNameError}
      />
      <Input
        id="last-name"
        label="Last name:"
        value={personData.lastName}
        onChange={(value) => updateField(value, "lastName")}
        error={personData.lastNameError}
      />
      <Input
        id="birthday"
        label="Birthday:"
        value={personData.birthday}
        placeholder="DD.MM.YYYY"
        onChange={(value) => updateField(value, "birthday")}
        error={personData.birthdayError}
      />
      <div className="form-buttons">
        <button className="form-button" onClick={checkForm}>
          Submit
        </button>
        <button className="form-button" onClick={closeForm}>
          Cancel
        </button>
      </div>
    </div>
  );
}
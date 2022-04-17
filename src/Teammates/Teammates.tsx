import { useState } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux'
import moment from 'moment';
import Form from '../components/Form/Form';
import { addTeammate } from '../store/actionCreators';
import './Teammates.css';

export default function Teammates() {
  const [formOpened, setFormOpened] = useState<boolean>(false);
  const teammates: ITeammate[] = useSelector(
    (state: TeammateState) => state.teammates,
    shallowEqual
    );
  const dispatch: Dispatch<any> = useDispatch();

  const sortData = (teammates: ITeammate[]) => {
    return teammates && teammates.sort((a, b) => {
      return a.birthday.getMonth() === b.birthday.getMonth()
        ? a.birthday.getDate() > b.birthday.getDate()
          ? 1
          : -1
        : a.birthday.getMonth() > b.birthday.getMonth()
          ? 1
          : -1
    })
  };

  const renderTeammates = () => {
    const sortedTeammates = sortData(teammates);
    return (
      <>
        {sortedTeammates && sortedTeammates.map((teammate: ITeammate, i: number) => {
          const now = new Date();
          const hasBirthdayToday =
            now.getMonth() === teammate.birthday.getMonth() && now.getDate() === teammate.birthday.getDate();
          // const isBirthdayInFuture =
          //   now.getMonth() < teammate.birthday.getMonth() ||
          //   (now.getMonth() === teammate.birthday.getMonth() && now.getDate() < teammate.birthday.getDate());
          // const age = now.getFullYear() - teammate.birthday.getFullYear() - Number(isBirthdayInFuture);

          return (
            <li className="teammates-item" key={i}>
              <span className="teammate-name">{teammate.name}</span>&nbsp;
              {/* <span className="teammate-age">{age} yrs</span>&nbsp; */}
              <span className="teammate-age">{moment(teammate.birthday).format('MMM, DD')}</span>&nbsp;
              {hasBirthdayToday ? <span className="teammate-birthday">HAPPY BIRTHDAY!</span> : null}
              <span className="teammate-joined">joined: {moment(teammate.joined).format('MMM, DD YYYY')}</span>&nbsp;
            </li>
          );
        })}
      </>
    )
  }

  const submit = (teammate: ITeammate) => {
    dispatch(addTeammate(teammate));
    setFormOpened(false);
  };

  return (
    <div>
      <h1>Teammates</h1>
      <ul className="teammates">{renderTeammates()}</ul>
        <button onClick={() => setFormOpened(true)} disabled={formOpened}>+ Add teammate</button>
        {formOpened && <Form submit={submit} closeForm={() => setFormOpened(false)} />}
    </div>
  );
}
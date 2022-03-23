import styles from '../styles/Home.module.css';
import data from '../data.js';
import helper from '../helper.js';

import Picture from './Picture.js';
import Spacer from './Spacer.js';

export default function People() {
  const people = data.map((person, index) => {
    return (
      <tr key={index}>
        <td>
          <Picture src={person.photo} size="75vw" />
        </td>
        <td>{`${person.firstName} ${person.lastName.slice(0, 1)}.`}</td>
        <td>{person.role ? person.role : 'N/A'}</td>
        <td>{person.company? <img src={person.company} alt="Company Logo" height="64px"/> : 'Still Looking!'}</td>
      </tr>
    );
  });

  return (
    <div className={styles.section}>
      <code className={styles.code}>People</code>
      <table className={styles.peopleTable}>
        <thead>
          <tr>
            <th colSpan="2"></th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>{people}</tbody>
      </table>
    </div>
  );
}

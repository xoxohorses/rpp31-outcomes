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
        <td>{person.firstName}</td>
        <td>
          {person.searchEndDate
            ? helper.daysElapsed(new Date(2022, 3, 19), person.searchEndDate)
            : 'N/A'}
        </td>
        <td>{person.stack ? person.stack : 'N/A'}</td>
        <td>{person.industry ? person.industry : 'N/A'}</td>
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
            <th>Length</th>
            <th>Stack</th>
            <th>Industry</th>
          </tr>
        </thead>
        <tbody>{people}</tbody>
      </table>
    </div>
  );
}

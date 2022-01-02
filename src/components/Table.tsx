import { useStoreInformations } from '../stores';

export function Table() {
  const storeInformations = useStoreInformations();
  return (
    <table>
      <thead>
        <th>id</th>
        <th>transactionId</th>
        <th>activated</th>
        <th>updated</th>
      </thead>
      <tbody>
        {storeInformations.map(({ id, transactionId, activated, updated }) => {
          return (
            <tr>
              <td>{id}</td>
              <td>{transactionId}</td>
              <td>{activated}</td>
              <td>{updated}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

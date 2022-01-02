export function Header() {
  return (
    <nav>
      <ul>
        <li>
          <h6>Stores</h6>
        </li>
        <li>
          <fieldset>
            <label htmlFor="isActivated">
              <input type={'checkbox'} id="isActivated" />
              Activated
            </label>
          </fieldset>
        </li>
      </ul>
    </nav>
  );
}

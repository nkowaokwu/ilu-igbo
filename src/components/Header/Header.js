import "./Header.css";

export function Header() {
  return (
    <header>
      <h1 className="text-primary">#ILUIGBO</h1>
      <p className="">mmanụ ndị Igbo ji eri okwu</p>
      <form class="search-form form-group">
        <p>you can search for proverbs using related Igbo or English words</p>
        <input
          className="form-input"
          id="search"
          placeholder="e.g. leopard or nwata"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
}

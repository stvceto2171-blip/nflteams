import Link from "next/link";

export default function Home() {
  const nbaTeams = [
    { name: "Boston Celtics", link: "https://www.nba.com/celtics" },
    { name: "Los Angeles Lakers", link: "https://www.nba.com/lakers" },
    { name: "Golden State Warriors", link: "https://www.nba.com/warriors" },
    { name: "Milwaukee Bucks", link: "https://www.nba.com/bucks" },
    { name: "Phoenix Suns", link: "https://www.nba.com/suns" },
    { name: "Miami Heat", link: "https://www.nba.com/heat" },
    { name: "Denver Nuggets", link: "https://www.nba.com/nuggets" },
    { name: "Dallas Mavericks", link: "https://www.nba.com/mavericks" },
    { name: "Philadelphia 76ers", link: "https://www.nba.com/sixers" },
  ];

  return (
    <main className="nba-page">
      <header className="nba-header">
        <h1>NBA TEAMS</h1>
      </header>

      <div className="nba-grid">
        {nbaTeams.map((team, index) => (
          <div key={index} className="nba-team-card">
            <h2>
              <a href={team.link} target="_blank" rel="noopener noreferrer">
                {team.name}
              </a>
            </h2>
          </div>
        ))}
      </div>

      <footer className="nba-footer">
        <Link href="/nfl-teams" className="nfl-link">
          Go to NFL Teams Page
        </Link>
      </footer>
    </main>
  );
}

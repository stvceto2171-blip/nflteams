"use client";

import Link from "next/link";

export default function HistoryOfGames() {
    return (
        <>
            <style jsx global>{`
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Georgia', serif;
            background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%);
            color: #333;
            padding: 40px 20px;
            line-height: 1.6;
        }

        .container {
            max-width: 1000px;
            margin: 0 auto;
        }

        header {
            text-align: center;
            margin-bottom: 60px;
            color: white;
        }

        h1 {
            font-size: 3em;
            margin-bottom: 10px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.3);
        }

        .subtitle {
            font-size: 1.2em;
            font-style: italic;
            opacity: 0.9;
        }

        .timeline {
            position: relative;
            padding: 20px 0;
        }

        .timeline::before {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            width: 4px;
            height: 100%;
            background: linear-gradient(to bottom, #f9d423, #ff4e50);
            box-shadow: 0 0 10px rgba(249, 212, 35, 0.5);
        }

        .era-title {
            text-align: center;
            color: white;
            font-size: 2em;
            margin: 60px 0 40px 0;
            padding: 20px;
            background: rgba(255, 255, 255, 0.1);
            border-radius: 10px;
            backdrop-filter: blur(10px);
            position: relative;
            z-index: 2;
        }

        .timeline-item {
            margin-bottom: 50px;
            position: relative;
            width: 45%;
            animation: fadeIn 0.6s ease-in;
        }

        @keyframes fadeIn {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .timeline-item:nth-child(odd) {
            margin-left: 0;
            padding-right: 40px;
            text-align: right;
        }

        .timeline-item:nth-child(even) {
            margin-left: 55%;
            padding-left: 40px;
            text-align: left;
        }

        .timeline-item::before {
            content: '';
            position: absolute;
            width: 20px;
            height: 20px;
            background: #f9d423;
            border: 4px solid #1e3c72;
            border-radius: 50%;
            top: 0;
            box-shadow: 0 0 15px rgba(249, 212, 35, 0.8);
            z-index: 3;
        }

        .timeline-item:nth-child(odd)::before {
            right: -10px;
        }

        .timeline-item:nth-child(even)::before {
            left: -10px;
        }

        .timeline-content {
            background: white;
            padding: 25px;
            border-radius: 12px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.2);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .timeline-content:hover {
            transform: scale(1.02);
            box-shadow: 0 8px 30px rgba(0,0,0,0.3);
        }

        .date {
            font-weight: bold;
            color: #ff4e50;
            font-size: 1.1em;
            margin-bottom: 8px;
        }

        .location {
            color: #666;
            font-style: italic;
            margin-bottom: 12px;
            font-size: 0.95em;
        }

        .game-title {
            font-size: 1.5em;
            color: #1e3c72;
            margin-bottom: 12px;
            font-weight: bold;
        }

        .description {
            color: #444;
            line-height: 1.7;
        }

        @media (max-width: 768px) {
            .timeline::before {
                left: 30px;
            }

            .timeline-item,
            .timeline-item:nth-child(odd),
            .timeline-item:nth-child(even) {
                width: 100%;
                margin-left: 0;
                padding-left: 60px;
                padding-right: 0;
                text-align: left;
            }

            .timeline-item::before,
            .timeline-item:nth-child(odd)::before,
            .timeline-item:nth-child(even)::before {
                left: 20px;
                right: auto;
            }

            h1 {
                font-size: 2em;
            }

            .era-title {
                font-size: 1.5em;
            }
        }

        .back-link {
          display: block;
          text-align: center;
          margin-top: 40px;
          color: white;
          text-decoration: underline;
          font-weight: bold;
          font-size: 1.2em;
        }
      `}</style>
            <div className="container">
                <header>
                    <h1>Timeline of Games and Play</h1>
                    <p className="subtitle">From Ancient Ritual to Modern Recreation (Pre-1900)</p>
                </header>

                <div className="timeline">
                    <div className="era-title">Ancient Era: The Foundations of Strategy and Luck</div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 3100 BCE</div>
                            <div className="location">Egypt (Predynastic)</div>
                            <div className="game-title">Mehen (The Game of the Snake)</div>
                            <div className="description">One of the earliest board games involving a coiled snake path. It is significant as a "race game" that likely carried ritualistic or protective meanings for the players.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 3000 BCE</div>
                            <div className="location">Egypt (First Dynasty)</div>
                            <div className="game-title">Senet</div>
                            <div className="description">Perhaps the most famous ancient game. Over centuries, it evolved from a secular pastime into a religious simulation of the soul's journey through the afterlife (Duat).</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 3000 BCE</div>
                            <div className="location">Shahr-e Sukhteh (Bronze Age Iran)</div>
                            <div className="game-title">The Earliest Dice</div>
                            <div className="description">Excavations at the "Burnt City" revealed 5,000-year-old dice. This marks the formalization of "randomness" as a controlled mechanic in gaming.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 2600 BCE</div>
                            <div className="location">Mesopotamia (Sumerian)</div>
                            <div className="game-title">The Royal Game of Ur</div>
                            <div className="description">A highly popular race game. Its significance lies in its longevity; it was played across the Middle East for millennia and influenced the mechanics of many later games, including Backgammon.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 1600 BCE</div>
                            <div className="location">Crete (Minoan)</div>
                            <div className="game-title">The Knossos Game (Zatrikion)</div>
                            <div className="description">A stunningly ornate board found in the Palace of Knossos. It represents the height of luxury in gaming, likely played only by royalty with ivory and crystal pieces.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 1300 BCE</div>
                            <div className="location">Egypt (New Kingdom)</div>
                            <div className="game-title">Hounds and Jackals</div>
                            <div className="description">Also known as "58 Holes." This game used decorative pegs and is significant for its refined "track-based" mechanics, which influenced race games throughout the Mediterranean.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 1000 BCE</div>
                            <div className="location">China (Zhou Dynasty)</div>
                            <div className="game-title">Go (Weiqi)</div>
                            <div className="description">One of the most complex abstract strategy games ever created. Unlike Western games that focus on "capture," Go focuses on territory and surrounding the opponent, reflecting Eastern philosophical concepts.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 7th Century BCE</div>
                            <div className="location">Africa/Near East</div>
                            <div className="game-title">Mancala</div>
                            <div className="description">Though hard to date precisely, these "pit and pebble" games represent a unique mathematical system based on sowing and reaping, distinct from the race games of Egypt.</div>
                        </div>
                    </div>

                    <div className="era-title">Classical and Medieval Eras: The Global Spread</div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 1st Century CE</div>
                            <div className="location">Roman Empire</div>
                            <div className="game-title">Ludus Duodecim Scriptorum</div>
                            <div className="description">A "Game of Twelve Inscriptions" that was a precursor to Tabula and modern Backgammon. It illustrates the Roman obsession with gambling and structured leisure (otium).</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 400 CE</div>
                            <div className="location">China (Han Dynasty)</div>
                            <div className="game-title">Liubo</div>
                            <div className="description">A mysterious game involving "divination sticks" and a complex board layout. It is significant for its connection to Chinese cosmology and the Eight Trigrams.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 6th Century CE</div>
                            <div className="location">India (Gupta Empire)</div>
                            <div className="game-title">Chaturanga</div>
                            <div className="description">The common ancestor of Chess, Xiangqi, and Shogi. It modeled the four divisions of the Indian military (infantry, cavalry, elephants, and chariotry), turning war into a mathematical abstract.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 7th Century CE</div>
                            <div className="location">China</div>
                            <div className="game-title">Xiangqi (Chinese Chess)</div>
                            <div className="description">A variation of Chaturanga that introduced the "River" and the "Cannon," significantly changing the geometry of the board to reflect local warfare styles.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 13th Century</div>
                            <div className="location">Medieval Europe</div>
                            <div className="game-title">Nine Men's Morris</div>
                            <div className="description">A strategy game mentioned in Shakespeare and found carved into the stones of medieval cathedrals. It represents the "folk game" tradition accessible to all social classes.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 1370</div>
                            <div className="location">Egypt (Mamluk Sultanate)</div>
                            <div className="game-title">Mamluk Playing Cards</div>
                            <div className="description">The direct ancestors of modern playing cards. They introduced the four suits (polo sticks, coins, swords, and cups) that would eventually transform into the French and Latin decks.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 1440</div>
                            <div className="location">Italy (Renaissance)</div>
                            <div className="game-title">Tarot (Tarocchi)</div>
                            <div className="description">Originally created as a trick-taking card game for aristocrats. It added "trump" cards to the standard deck, a massive innovation in game mechanics.</div>
                        </div>
                    </div>

                    <div className="era-title">The Early Modern Era: Ritual and Commerce</div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">1560</div>
                            <div className="location">Flanders (Netherlands)</div>
                            <div className="game-title">Bruegel's "Children's Games"</div>
                            <div className="description">While not a game itself, this painting is a landmark historical document. It depicts over 80 different types of play, proving that play was a central, chaotic element of civic life.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">1600s</div>
                            <div className="location">Japan (Edo Period)</div>
                            <div className="game-title">Hanafuda (Flower Cards)</div>
                            <div className="description">Developed as a way to bypass gambling laws that banned "Western-style" numbered cards. The game "Koi-Koi" emerged from this, focusing on seasonal imagery and set-collecting.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">1843</div>
                            <div className="location">United States</div>
                            <div className="game-title">The Mansion of Happiness</div>
                            <div className="description">One of the first commercially successful board games in the US. It is significant for being a "moral" game, where landing on virtues (Truth, Justice) moved you forward and vices (Idleness) moved you back.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">c. 1850</div>
                            <div className="location">China</div>
                            <div className="game-title">Mahjong</div>
                            <div className="description">Evolved from card games into a tile-based game. It represents a complex fusion of luck, strategy, and social interaction that quickly spread globally by the end of the century.</div>
                        </div>
                    </div>

                    <div className="timeline-item">
                        <div className="timeline-content">
                            <div className="date">1860</div>
                            <div className="location">United States</div>
                            <div className="game-title">The Checkered Game of Life</div>
                            <div className="description">Milton Bradley's first major hit. It moved away from pure religious morality toward "secular success," signaling the shift toward the modern "American Dream" style of gameplay.</div>
                        </div>
                    </div>
                </div>

                <Link href="/" className="back-link">
                    return to the main nfl teams page
                </Link>
            </div>
        </>
    );
}

import React, {useState} from 'react'
import './index.css'
import Button from './components/Button.js'
import Image from './Image.js'
import StartPage from './components/StartPage.js'
import EndPage from './components/EndPage.js'
import NotRated from './components/NotRated.js'
import CharChoice from './components/CharChoices.js'
import DocumentMeta from 'react-document-meta'

// TODO
// Track the user's choices (partially complete)
// When all characters are rated, change to a 'finished' screen
var smashCount = 0
var passCount = 0
const charLimit = 556
var trackExport = {}
const charNames = ["Ace", "Adagio Dazzle", "Ahuizotl", 
                  "All Aboard", "Amber Waves", "Amethyst Maresbury", 
                  "Amethyst Star (human)", "Amethyst Star", "Amira", 
                  "Angel Wings", "Angel", "Apple Bloom", 
                  "Apple Brown Betty", "Apple Bumpkin", "Apple Cider", 
                  "Apple Cinnamon", "Apple Cobbler", "Apple Dumpling", 
                  "Apple Flora", "Apple Fritter", "Apple Honey", 
                  "Apple Leaves", "Apple Munchies", "Apple Pie", 
                  "Apple Rose", "Apple Split", "Apple Stars", 
                  "Apple Strudel", "Applebloom (human)", "Applejack (png)", 
                  "Applejack", "Appleloosa deputies", "Applesauce", 
                  "Aria Blaze", "Aunt Holiday", "Aunt Orange", 
                  "Auntie Lofty", "Aura", "Autumn Blaze Nirik", 
                  "Autumn Blaze", "Babs Seed", "Banana Fluff", 
                  "Barber Groomsby", "Beauty Brass", "Berry Dreams", 
                  "Berryshine", "Big McIntosh (human)", "Big McIntosh", 
                  "Bill Neigh", "Bittersweet", "Blaze", 
                  "Blossomforth", "Blue Moon", "Bow Hothoof", 
                  "Braeburn", "Bright Mac", "Bright Smile", 
                  "Bubblegum Blossom", "Buddy", "Bufogren", 
                  "Bugbear", "Bulk Biceps (human)", "Bulk Biceps", 
                  "Bushel", "Button Mash", "Candy Apples", 
                  "Candy Mane", "Canter Zoom", "Capper", 
                  "Captain Celaeno", "Caramel Apple", "Caramel", 
                  "Cayenne", "Celestia", "Cerberus", 
                  "Chancellor Neighsay", "Charged Up", "Charm", 
                  "Cheerilee (human)", "Cheerilee", "Cheese Sandwich", 
                  "Chelsea Porcelain", "Cherry Berry", "Cherry Fizzy", 
                  "Cherry Gold", "Cherry Jubilee", "Cherry Spices", 
                  "Chestnut Magnifico", "Chief Thunderhooves", "Chimera", 
                  "Cipactli", "Citrus Blush", "Claude", 
                  "Clear Sky", "Cloud Chaser", "Cloud Kicker", 
                  "Cloudy Quartz", "Cockatrice", "Coco Crusoe", 
                  "Coco Pommel", "Coloratura (human)", "Coloratura", 
                  "Comet Tail", "Compass Star", "Constance", 
                  "Coriander Cumin", "Cotton Cloudy", "Count Caesar", 
                  "Cozy Glow", "Crafty Crate", "Cragadile", 
                  "Cranky Doodle (human)", "Cranky Doodle Donkey", "Crescent Moon", 
                  "Crystal Arrow", "Dainty Dove", "Daisy", 
                  "Dance Fever", "Daring Do", "Dark Moon", 
                  "Davenport", "DD Fido", "DD Rover", 
                  "DD Spot", "Derpy (human)", "Derpy", 
                  "Diamond Mint", "Diamond Tiara (human)", "Diamond Tiara", 
                  "Dinky Doo", "Discord", "DJ Pon-3", 
                  "Doc Top", "Doctor Horse", "Donny Kerabatsos", 
                  "Double Diamond", "Dr", "Dr", 
                  "Drizzle", "Dumbbell", "Eclair Creme", 
                  "Eiffel", "Elbow Grease", "Electric Sky", 
                  "Emerald Green", "Fancy Pants", "Fast clip", 
                  "Feather Bangs", "Featherweight", "Felix", 
                  "Fetter Keys", "Fiddly Twang", "Filthy Rich", 
                  "Fine Line", "Fire Streak", "Firelight", 
                  "Flam (human)", "Flam", "Flash Magnus", 
                  "Flash Sentry (human)", "Flash Sentry", "Fleetfoot", 
                  "Fleur de Verre", "Fleur Dis Lee (human)", "Fleur Dis Lee", 
                  "Flim (human)", "Flim", "Flitter", 
                  "Florina Tart", "Flurry Heart", "Fluttershy (human)", 
                  "Fluttershy", "Foggy Fleece", "Four Step", 
                  "Fruit bats", "Future Spike", "Future Twilight Sparkle", 
                  "Gabby", "Gala Appleby", "Gallus", 
                  "Garble", "Geri", "Gilda", 
                  "Giselle", "Gizmo", "Gladmane", 
                  "Globe Trotter", "Gloriosa Daisy", "Golden Delicious", 
                  "Golden Harvest", "Goldengrape", "Goldie Delicious", 
                  "Grampa Gruff", "Grand Pear", "Granny Smith (human)", 
                  "Granny Smith", "Green Jewel", "Greta", 
                  "Grogar", "Grubber", "Gummy", 
                  "Gustave", "Haakim", "Half Baked Apple", 
                  "Harry", "Hayseed Turnip", "Helia", 
                  "High Winds", "Hitch Trailblazer", "Hoity Toity", 
                  "Holly Dash", "Hondo Flanks", "Honey Rays", 
                  "Hoops", "Hughbert Jellius", "Hydra", 
                  "Igneous Rock", "Indigo Zap", "Inky Rose", 
                  "Iron Will", "Ivory", "Izzy Moonbow", 
                  "Jack Hammer", "Jack Pot", "Jeff Letrotski", 
                  "Jet Set (human)", "Jet Set", "Jetstream", 
                  "Joe", "Jonagold", "Junebug", 
                  "Juniper Montage (human)", "Juniper Montage", "King Sombra", 
                  "Kiwi Lollipop", "Lady Justice", "Lavender Bloom", 
                  "Lavender Fritter", "Leadwing", "Lemon Hearts", 
                  "Lemon Zest", "Lemony Gem", "Lightning Dust", 
                  "Lilac Links", "Lilac Sky", "Lily Lace", 
                  "Lily Valley", "Limestone Pie", "Little Strongheart", 
                  "Liza Doolots", "Lotus Blossom", "Luckette", 
                  "Lucky Clover", "Lucky Star", "Luster Dawn", 
                  "Lyra Heartstrings (human)", "Lyra Heartstrings", "Lyrica Lilac", 
                  "Mage Meadowbrook", "Magnet Bolt", "Mane Allgood", 
                  "Mane Goodall", "Mane-iac", "Mango Dash", 
                  "Manny", "Marble Pie", "Matilda", 
                  "Maud Pie (human)", "Maud Pie", "Maulwurf", 
                  "Mayor Mare", "Meadow Flower", "Meadow Song", 
                  "Merry May", "Metamorphosed Pharynx", "Micro Chips", 
                  "Minty", "Minuette", "Mistmane", 
                  "Misty Fly", "Mjolna", "Moon Dancer", 
                  "Moonlight Raven", "Mr", "Mr", 
                  "Mr", "Mr", "Mr", 
                  "Mr", "Mrs", "Mrs", 
                  "Ms", "Ms", "Mudbriar", 
                  "Mulia Mild", "Neon Lights (human)", "Neon Lights", 
                  "Night Glider", "Night Knight", "Night Light", 
                  "Nightmare Moon", "Noi", "North Point", 
                  "Noteworthy", "Nurse Redheart", "Ocean Flow", 
                  "Ocellus", "Octavia Melody (human)", "Octavia Melody", 
                  "Opalescence", "Orange Swirl", "Orthros", 
                  "Owlowiscious", "Paleo family", "Parasol", 
                  "Parasprite", "Parcel Post", "Parish Nandermane", 
                  "Party Favor", "Peachy Pitt", "Peachy Sweet", 
                  "Pear Butter", "Pearly Stitch", "Peewee", 
                  "Perfect Pace", "Pharynx", "Philomena", 
                  "Photo Finish (human)", "Photo Finish", "Pina Colada", 
                  "Pinkie Pie (human)", "Pinkie Pie", "Pinny Lane", 
                  "Pipp Petals", "Pipsqueak", "Pixel Pizzaz", 
                  "Pizzelle", "Ponet", "Pony of Shadows", 
                  "Pound Cake", "Prim Hemline (human)", "Prim Hemline", 
                  "Prim Posy", "Prince Rutherford", "Princess Amore", 
                  "Princess Cadance", "Princess Ember", "Princess Erroria", 
                  "Princess Luna", "Princess Skystar", "Principal Celestia (human)", 
                  "Principal Cinch", "Pumpkin Cake", "Purple Wave", 
                  "Pursey Pink", "Quarray eels", "Queen Chrysalis", 
                  "Queen Novo", "Quibble Pants", "Rainbow Blaze", 
                  "Rainbow Dash (human)", "Rainbow Dash", "Rainbow Stars", 
                  "Rainbow Swoop", "Rainbowshine", "Rainy Feather", 
                  "Randolph (human)", "Randolph", "Rare Find", 
                  "Rarity (human)", "Rarity", "Raven", 
                  "Ray", "Red Delicious", "Red Gala", 
                  "Richard Hoovenheart", "Ripley", "Rivet", 
                  "Roc", "Rockhoof", "Roma", 
                  "Rose", "Royal Pin", "Royal Ribbon", 
                  "Royal Riff", "Rubinstein", "Ruby Pinch", 
                  "Ruby Splash", "Rumble", "Sandalwood", 
                  "Sandbar", "Sapphire Joy", "Sapphire Shores", 
                  "Sassaflash", "Sassy Saddles", "Savoir Fare", 
                  "Sci-Twi", "Scootaloo (human)", "Scootaloo", 
                  "Score", "Scorpan", "Screwball", 
                  "Screwy", "Sea Swirl", "Seabreeze", 
                  "Sealed Scroll", "Serena", "Serenity", 
                  "Shady Daze", "Sheriff Silverstar", "Shining Armor", 
                  "Shoeshine", "Shooting Star", "Silver Berry", 
                  "Silver Script", "Silver Shill", "Silver Spanner", 
                  "Silver Spoon (human)", "Silver Spoon", "Silver Zoom", 
                  "Silverspeed", "Silverstream", "Sir Pony Moore", 
                  "Sky Beak", "Sky Stinger", "Sludge", 
                  "Smoky's Family", "Smolde", "Smooze", 
                  "Snail (human)", "Snails", "Snap Shutter", 
                  "Snips (human)", "Snips", "Soarin", 
                  "Somnambula", "Sonata Dusk", "Songbird Serenade", 
                  "Sour Sweet", "Spearhead", "Sphinx", 
                  "Spike (dog)", "Spike", "Spitfire", 
                  "Spoiled Rich", "Spring Forward", "Spring Step", 
                  "Sprinkle Medley", "Star Bright", "Star Gazer", 
                  "Star Hunter", "Star Spur", "Star Swirl", 
                  "Starburst", "Starlight Glimmer (human)", "Starlight Glimmer", 
                  "Starry Eyes", "Starstreak", "Stellar Eclipse", 
                  "Stellar Flare", "Steven Magnet", "Storm creatures", 
                  "Stormfeather", "Strawberry bats", "Strawberry Ice", 
                  "Strawberry Sunrise", "Strike", "Stygian", 
                  "Sugar Belle", "Sugarcoat", "Sunburst", 
                  "Sunny Daze", "Sunny Flare", "Sunny Rays", 
                  "Sunny Starscout", "Sunset Shimmer (human)", "Sunset Shimmer", 
                  "Sunshine Petals", "Sunshine Smiles", "Sunshower Raindrops", 
                  "Supernova Zap", "Suri Polomare (human)", "Suri Polomare", 
                  "Surprise", "Svengallop", "Sweet Pop", 
                  "Sweet Tooth", "Sweetie Belle (human)", "Sweetie Belle", 
                  "Sweetie Drops (human)", "Sweetie Drops", "Tall Order", 
                  "Tank", "Tatzlwurm", "Teddie Safari", 
                  "Tempest Shadow", "Tender Taps", "Terramar Hippogriff", 
                  "Terramar seapony", "The Shadowbolts", "The Storm King", 
                  "The timberwolves", "Thorax (New Form)", "Thorn", 
                  "Thunderlane", "Timber Spruce", "Tirek", 
                  "Toola Roola", "Top Marks", "Tornado Bolt", 
                  "Tree Hugger", "Trenderhoof (human)", "Trenderhoof", 
                  "Trixie (human)", "Trixie", "Trouble Shoes", 
                  "Truffle Shuffle", "Twilight Sky", "Twilight Sparkle (human)", 
                  "Twilight Velvet", "Twilight", "Twinkleshine", 
                  "Twist smiles", "Uncle Orange", "unnamed pony 1", 
                  "Ursa major", "Ursa minor", "Vapor Trail", 
                  "Vice Principal Luna (human)", "Vidala Swoon", "Vignette Valencia", 
                  "Violet Blurr", "Wallflower Blush", "Walter", 
                  "Warm Front", "Wensley", "Whiplash", 
                  "White Lightning", "Whitewash", "Whoa Nelly", 
                  "Wild Fire", "Wind Rider", "Wind Sprint", 
                  "Windigoes", "Winona", "Winterchilla", 
                  "Winterzilla", "Wisp", "Written Script", 
                  "Yona", "Zecora", "Zephyr Breeze (human)", 
                  "Zephyr Breeze", "Zesty Gourmand", "Zipp Storm", 
                  "Zipporwhill", ]

function App() {
  const [curNum, setNum] = useState(1)
  const [smashed, setSmash]= useState(0)
  const [passed, setPass] = useState(0)
  const [startStat, setStart] = useState(true)
  const [choiceTrack, setTrack] = useState({})
  var [curIsRated, setRated] = useState(true)
  const meta = {
    title: "My Little Pony Smash or pass",
    desciption: "Website similar to the idea of pokemon smash or pass, but with My Little Pony characters instead",
    meta: {
      charset: "utf-8",
      new: {
        keywords: 'MLP, Pokemon Smash or Pass, My Little Pony Smash or Pass, Smash or Pass, My little Pony'
      }
    }
  }

  const onClick = (choice) => {
    if (!choiceTrack.hasOwnProperty(curNum)){
      if (choice){
        setSmash(smashed + 1)
        smashCount += 1
      }else{
        setPass(passed + 1)
        passCount += 1
      }
      setNum(curNum + 1)
      setRated(true)
    }

    console.log("Smashed: " + smashCount)
    console.log("Passed: " + passCount)
    console.log("Current: " + curNum)
  }

  const reset = () => {
    setNum(1)
    setSmash(0)
    setPass(0)
    smashCount = 0
    passCount = 0
    setTrack({})
  }

  const navNum = (direction) => {
    // 0 left; 1 right
    var temp = curNum

    // console.log(curNum)
    if (!direction && curNum > 1){
      temp -= 1
      setRated(true)
    }else if (direction){
      if (choiceTrack.hasOwnProperty(curNum) && curNum < charLimit){
        temp += 1
        setRated(true)
      }else{
        setRated(false)
      }
    }
    
    return temp
  }

  const addChoice = (choice) => {
    // 0 passed; 1 smashed
    if (!choiceTrack.hasOwnProperty(curNum)){
      var temp = {}
      temp[curNum] = choice
      // console.log(temp)

      setTrack(Object.assign(choiceTrack, temp))
      trackExport = choiceTrack
      console.log(choiceTrack)
    }
  }

  // start page
  if (startStat){
    return(
      <DocumentMeta {...meta}>
        <div className="App">
          <div className="startContainer">
            <StartPage />
            <ul id="backRef" className="background">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            <Button id="resetBut" onClick={() => setStart(false)} color="#535b6b" name="Start" width="130px" />
          </div>
        </div>
      </DocumentMeta>
    )
  }

  // end page
  if (curNum > charLimit){
    return (
      <DocumentMeta {...meta}>
        <div className="App">
          <div className="startContainer">
            <EndPage />
            <ul id="backRef" className="background">
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
                  <li></li>
              </ul>
            <Button id="resetBut" onClick={() => reset()} color="#535b6b" name="Restart" width="130px"/>
          </div>

          <CharChoice />
        </div>
      </DocumentMeta>
    )
  }

  // voting page
  return (
    <DocumentMeta {...meta}>
      <div className="App">
        <div className="mainPage">
          {/*spans are for floating background circles*/}
          <div className="bubbles">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          
          <div className="title">
            <p id="head">My Little Pony</p>
            <p id="subHead"><span style={{color:"rgb(100,240,20)"}}>Smash</span> or <span style={{color:"rgb(240,100,20)"}}>Pass</span></p>
          </div>

          <div className="container">
            <div className="contents">
              <p id="counter" style={{color:"white", fontSize:"20px"}}>{curNum} / {charLimit}</p>  
              <div className="imgContainer">
                <p id="subHead" style={{color:"white"}}>{charNames[curNum-1]}</p>
                <img id="character" src={Image[curNum]} alt="Pony"/>
              </div>

              <div className="passedCounter">
                <p id="title">Passed</p>
                <p id="counter">{passed}</p>
              </div>

              <div className="smashedCounter">
                <p id="title">Smashed</p>
                <p id="counter">{smashed}</p>
              </div>

              <div className="buttonsCont">
                <Button onClick={() => setNum(navNum(0))} color="#535b6b" text="white" name="<" />
                <Button onClick={() => {onClick(0);addChoice(0)}} color="red" text="white" name="PASS" width="130px"/>
                <Button onClick={() => {onClick(1);addChoice(1)}} color="green" text="white" name="SMASH" width="130px"/>
                <Button onClick={() => setNum(navNum(1))} color="#535b6b" text="white" name=">"/>
              </div>
            </div>
            <div className="errorMsg">{!curIsRated ? <NotRated /> : ""}</div>
          </div>
        </div>
      </div>
      </DocumentMeta>
  );
}

export default App
export {smashCount, passCount}
export {trackExport, charNames}
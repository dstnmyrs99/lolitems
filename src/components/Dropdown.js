
import { useHistory } from "react-router-dom";

function Dropdown({toFilter, setToFilter}) {
    const history = useHistory();
    const changeHandler = (event)=>{
        setToFilter(event.target.value);
        history.push(`/${event.target.value}`)
    }
      return (
        <>
        <label htmlFor="tags">Filter:</label>
        <select name="tags" id="tags" value={toFilter} onChange={changeHandler}>
            <option value="">All</option>
            <option value="Boots">Boots</option>
            <option value="ManaRegen">Mana Regen</option>
            <option value="HealthRegen">Health Regen</option>
            <option value="Health">Health</option>
            <option value="CriticalStrike">Critical Strike</option>
            <option value="SpellDamage">Spell Damage</option>
            <option value="Mana">Mana</option>
            <option value="Armor">Armor</option>
            <option value="SpellBlock">Spell Block</option>
            <option value="LifeSteal">Life Steal</option>
            <option value="SpellVamp">Spell Vamp</option>
            <option value="Jungle">Jungle</option>
            <option value="Damage">Damage</option>
            <option value="Lane">Lane</option>
            <option value="AttackSpeed">Attack Speed</option>
            <option value="OnHit">On Hit</option>
            <option value="Consumable">Consumable</option>
            <option value="Active">Active</option>
            <option value="Vision">Vision</option>
            <option value="Stealth">Stealth</option>
            <option value="NonbootsMovement">Nonboots Movement</option>
            <option value="Tenacity">Tenacity</option>
            <option value="GoldPer">Gold Per</option>
            <option value="CooldownReduction">Cooldown Reduction</option>
            <option value="Aura">Aura</option>
            <option value="MagicPenetration">Magic Penetration</option>
            <option value="Slow">Slow</option>
            <option value="ArmorPenetration">Armor Penetration</option>
            <option value="Trinket">Trinket</option>
        </select>
        </>
      );
  }
  export default Dropdown;
export default function TabButton({children, onAnyEventWeWant, isSelected}){
    console.log('Rendering TabButton')
    return(
        <li>
            <button className={isSelected ? 'active' : undefined} onClick={onAnyEventWeWant}>{children}</button>
        </li>
    );
}
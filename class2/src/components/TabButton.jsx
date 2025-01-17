export default function TabButton({children,onAnyEventWeWant,isSelected}){

    console.log('TabButtonApp is being rendered')

    return(
        <li><button className={isSelected?'active':undefined} onClick={onAnyEventWeWant}>{children}</button></li>
    );
}
export default function Button({children,mode="filled", Icon,...props}) {
    // Todo: Build this component!
    let classC=`button ${mode}-button`;
    if(Icon){
        classC=classC+'icon-button';
    }
    return(
        <button className={classC} {...props}>
            {Icon &&(<span className="button-icon"><Icon></Icon></span>)}
            {children}
        </button>

    );
    // !!! Important: 
    // Wrap the icon with a <span className="button-icon"> to achieve the target look
   }
   
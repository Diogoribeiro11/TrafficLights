import React from "react";


//create your first component
const Light = ({color, lit, setLit}) => {
	
return(
	<div>
		<div className="Light" style={{backgroundColor: color === lit? color: 'grey'}}
		onClick={()=> setLit(color)}></div>
	</div>
)

}
export default Light;

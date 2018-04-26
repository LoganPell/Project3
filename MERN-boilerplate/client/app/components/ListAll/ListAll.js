import React from 'react';

const ListAll = (props) => {
    return (
    	<tr>
       	<td>{props.date}</td>
       	<td>{props.type}</td>
	      <td>{props.desc}</td>
	      <td>{"$"+props.amount}</td>
	    	<td> 
      		 <a onClick={props.deleteClick} className="waves-effect waves-light red accent-2 btn-small"><i className="material-icons">delete_forever</i></a>
      	</td>
      </tr>

    )
};

export default ListAll;


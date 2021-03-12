import React from 'react';
import { Loader, Item } from '../../components';
import { CollapsibleWrapper } from './Collapsible.styles'
import { useContactsAPI } from '../../hooks';

export const Collapsible = () => {
    const [{isLoading, users}, fetchUsers] = useContactsAPI()
    
    return ( 
        <CollapsibleWrapper>
        <button onClick={() => fetchUsers()}>Fetch users</button>
            {
                isLoading ? <Loader /> : users.map(item => <Item key={item.title} item={item}/>)
            }
        </CollapsibleWrapper>
    )
}

export default Collapsible
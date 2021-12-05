import { Component } from 'react';

interface User {
    name: string,
    age: number
}

interface UserSearchProps {
    users: User[]
}

interface UserSearchState {
    name: string,
    user: User | undefined
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState = {
      name: '',
      user: undefined
    };

    onClick = () => {
        console.log('some info')
    }

    render() {
        return (
            <div>
                {/*{some changes}*/}
            </div>
        )
    }
}

export default UserSearch;

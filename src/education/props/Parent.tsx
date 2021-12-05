import { Child } from './Child';

const Parent = () => {
    return <Child color="red" onClick={() => console.log('CLicked')}>
    something
    </Child>
};

export default Parent;
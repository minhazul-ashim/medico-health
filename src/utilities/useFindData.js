import useLoadService from '../hooks/useLoadService';

const useFindData = (props) => {

    const dataArray = useLoadService('blogs');

    const found = dataArray.find(data => data.title === props)

    return found;
};

export default useFindData;
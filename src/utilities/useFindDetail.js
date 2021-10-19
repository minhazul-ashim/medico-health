import useLoadService from '../hooks/useLoadService';

const useFindDetail = (props) => {

    const dataArray = useLoadService('services');

    const found = dataArray.find(data => data.id == props)

    return found;
};

export default useFindDetail;
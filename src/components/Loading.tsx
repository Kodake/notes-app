import Spinner from 'react-bootstrap/esm/Spinner';

const Loading = () => {
    return (
        <>
            <div className="mt-5 text-center">
                <Spinner animation='border' variant='primary' />
                <Spinner animation='border' variant='success' />
                <Spinner animation='border' variant='danger' />
            </div>
        </>
    )
}

export default Loading;
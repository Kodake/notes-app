import Header from '../components/Header';
import './ViewNotes.css'

const dummyData = [
    { name: 'first note', id: 1 },
    { name: 'second note', id: 2 },
    { name: 'third note', id: 3 },
]

const ViewNotes = () => {
    return (
        <>
            <Header />
            <div className="">
                <h1>View Notes</h1>

                <ul className='container'>
                    {dummyData.map(item => (
                        <li key={item.id}>{item.name}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default ViewNotes;
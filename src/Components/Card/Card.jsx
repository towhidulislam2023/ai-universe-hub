import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';
import DisplayCard from '../DisplayCard/DisplayCard';
import Modal from '../Modal/Modal';

const Card = () => {
    const [values, setValues] = useState([])
    const [uniqueid, setUniqueId] = useState(null)
    const [singalModalData,setSingalModalData]=useState({})
    // console.log(uniqueid);
    const [button, setButton] = useState(true)
    const showAllData = () => {
        setButton(false)
    }
const handelSortedData=()=>{
    const sortedData = values.sort((a, b) => {
        return new Date(b.published_in) - new Date(a.published_in);
    });
    setValues([...values, sortedData])
}
    useEffect(() => {
        fetch(`https://openapi.programming-hero.com/api/ai/tool/${uniqueid}`).then(res => res.json()).then(data => setSingalModalData(data.data))
    }, [uniqueid])


    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/ai/tools')
            .then(res => res.json())
            .then(data => setValues(data.data.tools))
    }, [])
    

    return (
        <>
            <span onClick={handelSortedData}>
                <Button >Sort By Date</Button>
                </span>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-6  lg:w-[75%] mx-auto'>

                {
                    values.slice(0, button ? 6 : 12).map(value => <DisplayCard value={value} key={value.id} setUniqueId={setUniqueId} />)
                }
                {/* {
                    values.slice(0, button ? 6 : 12).map(value =>{
                        return <DisplayCard value={value} key={value.id} />
                        
                    } )
                } */}



            </div>
            <span onClick={showAllData} >
                {button && <Button>See More</Button>}
            </span>

            <Modal singalData={singalModalData}></Modal>
        </>
    );
};

export default Card;
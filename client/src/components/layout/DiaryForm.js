import React, {useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


const DiaryForm = () => {
    const [yoga, setYoga] = useState("")
    const [walk, setWalk] = useState("")
    const [run, setRun] = useState("")
    const [video, setVideo] = useState("")
    const [violin, setViolin] = useState("")
    const [music, setMusic] = useState("")
    const [coding, setCoding] = useState("")
    const [teaching, setTeaching] = useState("")

    const onSubmit = e => {
        e.preventDefault();
        
        console.log({yoga, walk, run, video})
        console.log({violin, music})
        console.log({coding, teaching})

    }
    return (
        <div style={{padding: '8rem'}}>
            <Form onSubmit={e => onSubmit(e)} >
                <Form.Group controlId="yoga" onChange={e => setYoga(e.target.value)}>
                    <Form.Label style={{color: '#008000'}}>Yoga</Form.Label>
                    <Form.Control as="select">
                        <option>Please select</option>
                        <option value="0">none</option>
                        <option value="30">30min</option>
                        <option value="60">60min</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="walk" onChange={e => setWalk(e.target.value)}>
                    <Form.Label style={{color: '#008000'}}>Walking</Form.Label>
                    <Form.Control as="select">
                        <option>Please select</option>
                        <option value="0">none</option>
                        <option value="30">30min</option>
                        <option value="60">60 - 90min</option>
                        <option value="120">120+ min</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="running" onChange={e => setRun(e.target.value)}>
                    <Form.Label style={{color: '#008000'}}>Running</Form.Label>
                    <Form.Control as="select">
                        <option>Please select</option>
                        <option value="0">none</option>
                        <option value="20">20min</option>
                        <option value="30">30min</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="video" onChange={e => setVideo(e.target.value)}>
                    <Form.Label style={{color: '#008000'}}>Exercise video</Form.Label>
                    <Form.Control as="select">
                        <option>Please select</option>
                        <option value="0">none</option>
                        <option value="20">20 min</option>
                        <option value="30">30min</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="violin" onChange={e => setViolin(e.target.value)}>
                    <Form.Label style={{color: 'red'}}>Violin Practice</Form.Label>
                    <Form.Control as="select">
                        <option>Please select</option>
                        <option value="0">none</option>
                        <option value="90">60 - 90min</option>
                        <option value="120">120+ min</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="music" onChange={e => setMusic(e.target.value)}>
                    <Form.Label style={{color: 'red'}}>Concert or Rehearsal</Form.Label>
                    <Form.Control as="select">
                        <option>Please select</option>
                        <option value="0">none</option>
                        <option value="90">60 - 90min</option>
                        <option value="120">120+ min</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="coding" onChange={e => setCoding(e.target.value)}>
                    <Form.Label style={{color: 'gold'}}>Coding</Form.Label>
                    <Form.Control as="select">
                        <option>Please select</option>
                        <option value="null">none</option>
                        <option value="half">Half Day</option>
                        <option value="full">Full Day</option>
                    </Form.Control>
                </Form.Group>

                <Form.Group controlId="teaching" onChange={e => setTeaching(e.target.value)}>
                    <Form.Label style={{color: 'gold'}}>Teaching</Form.Label>
                    <Form.Control as="select">
                        <option>Please select</option>
                        <option value="null">none</option>
                        <option value="small">1 - 2 students</option>
                        <option value="large">Full Day</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="danger" type="submit">
                    Submit
                </Button>

            </Form>
        </div>
    )
}

export default DiaryForm

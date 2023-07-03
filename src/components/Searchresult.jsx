import React from 'react'
import EmployeeCard from './EmployeeCard'


let bcard = [
    {
        name: "keshav sandhu",
        jobtitle: "MERN Stack",
        place: "kuk",
        src: "waited",
        pay: 450,
        rating: 3.9
    },
    {
        name: "keshav sandhu",
        jobtitle: "MERN Stack",
        place: "kuk",
        src: "waited",
        pay: 450,
        rating: 3.9
    },
    {
        name: "keshav sandhu",
        jobtitle: "MERN Stack",
        place: "kuk",
        src: "waited",
        pay: 450,
        rating: 3.9
    },
    {
        name: "Temp name",
        jobtitle: "Data Science",
        place: "kuk",
        src: "waited",
        pay: 450,
        rating: 3.9
    },

]

let jobs = ["Web dev", "tester", "Data science", "ML", "AI"]
export default function Searchresult() {

    return (
        <div>

            <section className="search m-5">

                <div className='jobed'>

                    <select name="jobs" id="jobs" >
                        <option value="select">select</option>
                        {jobs.map((job) => {
                            return <option value={job}>{job}</option>
                        })}
                    </select>

                    <input type="search" name="" placeholder='explore your side hustle' id="jobsearch" />

                    <select name="city" id="city" >
                        <option value="select">choose city</option>
                        {jobs.map((job) => {
                            return <option value={job}>{job}</option>
                        })}
                    </select>

                    <div className='searchbutton'>Find jobs {"->"}</div>
                </div>

            </section>

            <section className='d-flex'>
                <div className='filter'>
                    <p>filter and sort</p>
                </div>
                <div className="container d-flex flex-wrap">
                    {bcard.map((item) => {
                        return <EmployeeCard
                            name={item.name}
                            place={item.place}
                            pay={item.pay}
                            rating={item.rating}
                            jobtitle={item.jobtitle}
                        />
                    })}
                </div>

            </section>
        </div>

    )
}

import React, { FormEvent, useRef } from 'react'
import Button from '../ui/Button'
import classes from '@/styles/EventsSearch.module.css'


interface Props {
    onSearch: (year:string, month:string) => void
}

export default function EventsSearch({onSearch}:Props) {
    const yearInputRef = useRef<HTMLSelectElement>(null);
    const monthInputRef = useRef<HTMLSelectElement>(null);


    const submitHandler = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const selectedYear = yearInputRef.current?.value;
        const selectedMonth = monthInputRef.current?.value;
        onSearch(selectedYear!, selectedMonth!);
    }
  return (
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <label htmlFor="year">Year</label>
                <select name="" id="year" ref={yearInputRef}>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                </select>
            </div>
            <div className={classes.control}>
                <label htmlFor="month">Month</label>
                <select id="month" ref={monthInputRef}>
                    <option value="1">1월</option>
                    <option value="2">2월</option>
                    <option value="3">3월</option>
                    <option value="4">4월</option>
                    <option value="5">5월</option>
                    <option value="6">6월</option>
                    <option value="7">7월</option>
                    <option value="8">8월</option>
                    <option value="9">9월</option>
                    <option value="10">10월</option>
                    <option value="11">11월</option>
                    <option value="12">12월</option>
                </select>
            </div>
            <Button onClick={() => {}}>검색</Button>
        </div>
    </form>
  )
}

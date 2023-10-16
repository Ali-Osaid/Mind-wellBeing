'use client'
import React from 'react';
import { FormDataType } from '@/Types/Types';
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon } from "@radix-ui/react-icons";
import {  format } from "date-fns";
import {z} from 'zod'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BookingForm() {

  const formSchema = z.object({
    duration: z.string(),
    email: z.string().email("Enter Valid Email Address"),
    phoneNumber: z.string().min(5,"Please Enter Valid Phone Number"),
    Time: z.date(),
    typeOfTherapy: z.string(),
    username: z.string(),
  });
  
  const [date, setDate] = React.useState<Date>();
  
  const [form,setForm] = React.useState<FormDataType>({
    duration:'',
    email:'',
    phoneNumber:'',
    Time:date!,
    typeOfTherapy:'',
    username:''
  });

  const [errors, setErrors] = React.useState({
    username: '',
    typeOfTherapy: '',
    Time: '',
    phoneNumber: '',
    duration: '',
    email:''
  });

  const handleSubmit = () =>{
    console.log(form);
    
  }
   return (
    <div className="flex justify-center pt-2">
      <div className="grid w-full max-w-sm items-center gap-1.5 p-5">
        <Label htmlFor="Fullname" className="pt-2" >Full Name</Label>
        <Input type="text" id="Fullname" placeholder="Full Name" onChange={(e)=>setForm({...form,username:e.target.value})} />

        <Label htmlFor="email" className="pt-2" >Email</Label>
        <Input type="email" id="email" placeholder="Email" onChange={(e)=>setForm({...form,email:e.target.value})}/>

        <Label htmlFor="Phone-Number" className="pt-2" >Phone Number</Label>
        <Input type="text" id="Phone-Number" placeholder="Phone Number"  onChange={(e)=>setForm({...form,phoneNumber:e.target.value})}/>

        <Label htmlFor="Type-of-Therapy" className="pt-2" >Type of Therapy</Label>
        <Select onValueChange={(value)=>setForm({...form,typeOfTherapy:value})}>
          <SelectTrigger className="w-[180px]" id="Type-of-Therapy">
            <SelectValue placeholder="Select a Therapy Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Types</SelectLabel>
              <SelectItem value="Individual Therapy">Individual Counseling</SelectItem>
              <SelectItem value="Couples Therapy">Couples Counseling</SelectItem>
              <SelectItem value="Family Therapy">Family Therapy</SelectItem>
              <SelectItem value="Group Therapy">Group Therapy</SelectItem>
              <SelectItem value="Child  Counseling">Child Counseling</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Label htmlFor="Duration" className="pt-2" >Select Therapist Duration</Label>
        <Select onValueChange={(value)=>setForm({...form,duration:value})}>
          <SelectTrigger className="w-[180px]" id="Duration">
            <SelectValue placeholder="Select Duration:" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Duration</SelectLabel>
              <SelectItem value="45">45 minutes</SelectItem>
              <SelectItem value="1.5">1.5 hour</SelectItem>
              <SelectItem value="2.25">2.25 hours</SelectItem>
              <SelectItem value="3">3 hours</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Label htmlFor="Pick-Date" className="pt-2" >Pick Date</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button
              variant={"outline"}
              className={cn(
                "w-[240px] justify-start text-left font-normal",
                !date && "text-muted-foreground"
              )}
            >
              <CalendarIcon className="mr-2 h-4 w-4" />
              {date ? format(date, "PPP") : <span>Pick a date</span>}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar mode="single" selected={date} onSelect={setDate} initialFocus />
          </PopoverContent>
        </Popover>

        <Button className="bg-teal-400 hover:bg-teal-500 mt-2" onClick={handleSubmit}>Book</Button>
      </div>
    </div>
  );
}

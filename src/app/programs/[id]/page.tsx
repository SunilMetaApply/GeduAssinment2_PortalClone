"use client";
import React from 'react';
import programsData from '../programs.json';
import { useRouter } from 'next/navigation';

const ProgramDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const { id } = params;
  const program = programsData.programs.find((findprogram) => findprogram.id.toString() === id);

  if (!program) {
    return <p>Program not found.</p>;
  }

  return (
    <div>
      <h1>{program.name}</h1>
      <img src={program.logo} alt="Program Logo" />
      <p>{program.university.name} ({program.university.campus}), {program.university.country}</p>
      <h2>Program Details</h2>
      <p>Category: {program.details.course_category}</p>
      <p>Degree: {program.details.course_degree}</p>
      <p>Application Fee: {program.details.application_fee}</p>
      <p>Duration: {program.details.duration_months} months</p>
    </div>
  );
};

export default ProgramDetail;

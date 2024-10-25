"use client";
import React from 'react';
import programsData from '../programs.json';
import { useRouter } from 'next/navigation';
import { Button, Container, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
const ProgramDetail: React.FC<{ params: { id: string } }> = ({ params }) => {
  const router = useRouter()
  const { id } = params;
  const program = programsData.programs.find((findprogram) => findprogram.id.toString() === id);

  if (!program) {
    return <p>Program not found.</p>;
  }

  const handleBack =() =>{
    router.back();
  }

  return (
      <>

        <Container sx={{padding:'10px 0px'}}>
          <Button variant="contained" onClick={handleBack}><ArrowBackIcon/> Back</Button>
          <Typography sx={{padding:'10px 0px'}} variant="h4">
            {program.name}
          </Typography>
          <img src={program.logo} alt="Program Logo" />
          <Typography variant="body1">
            {program.university.name} ({program.university.campus}), {program.university.country}
          </Typography>
          <Typography variant="h5">
              Program Details
          </Typography>
          <Typography variant="body1">
              Category: {program.details.course_category}
          </Typography>
          <Typography variant="body1">
              Degree:{program.details.course_degree}
          </Typography>
          <Typography variant="body1">
              Application Fee: {program.details.application_fee}
          </Typography>
          <Typography variant="body1">
              Duration: {program.details.duration_months} months
          </Typography>
        </Container>
      </>
  );
};

export default ProgramDetail;

import { Card, Grid, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';
import programsData from './programs.json';

const AllPrograms: React.FC = () => {
  return (
    <>
      <Grid sx={{ padding: '1.5em 0em' }} container>
        <Grid item xs={6}>
          <h3>Programs</h3>
        </Grid>
        <Grid item xs={6}>
          <h3 style={{ textAlign: 'right' }}>{programsData.programs.length} Results</h3>
        </Grid>
      </Grid>
      {programsData.programs.map((program) => (
        <Card key={program.id} sx={{ padding: '1.5em', marginBottom: '1em' }}>
          <Grid container>
            <Grid item xs={7}>
              <Link href={`/programs/${program.id}`}>
                <Typography variant="h5">{program.name}</Typography>
              </Link>
              <p>
                {program.university.name} ({program.university.campus}), {program.university.country}
              </p>
            </Grid>
            <Grid item xs={5}>
              <img
                src={program.logo}
                style={{ marginLeft: 'auto', display: 'block' }}
                alt="logo"
              />
            </Grid>
          </Grid>
          <Card sx={{ padding: '1em', background: '#f3f3f3', marginTop: '1em' }}>
            <h5>Program Details</h5>
            <Grid container>
              <Grid item xs={3}>
                <p>Category: {program.details.course_category}</p>
                <p>Degree: {program.details.course_degree}</p>
                <p>Application Fee: {program.details.application_fee}</p>
                <p>Duration: {program.details.duration_months} months</p>
              </Grid>
            </Grid>
          </Card>
        </Card>
      ))}
    </>
  );
};

export default AllPrograms;

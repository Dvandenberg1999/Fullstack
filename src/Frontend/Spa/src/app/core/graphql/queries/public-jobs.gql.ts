import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { JobListResponse } from '../models/job-list-response';
import { jobSummaryFieldsFragment } from '../fragments/job-summary-fields.fragment.gql';

@Injectable({
  providedIn: 'root',
})
export class PublicJobsGQL extends Query<JobListResponse> {
  document = gql`
  query FullStackJobsQuery
  {           
    publicJobs {
      ...jobSummaryFields                                  
    }         
  },
  ${jobSummaryFieldsFragment} 
  `;
}
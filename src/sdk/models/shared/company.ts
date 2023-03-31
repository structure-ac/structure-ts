/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";

/**
 * returns the company
 */
export class Company extends SpeakeasyBase {
  /**
   * The company's description
   */
  @SpeakeasyMetadata()
  about: string;

  /**
   * Affiliated companies to the company
   */
  @SpeakeasyMetadata()
  affiliated: string[];

  /**
   * The size of the company
   */
  @SpeakeasyMetadata()
  companySize: string;

  /**
   * The country's country code
   */
  @SpeakeasyMetadata()
  countryCode: string;

  /**
   * A sample of the company's employees. See the employees endpoint for the full list.
   */
  @SpeakeasyMetadata()
  employees: string[];

  /**
   * The number of company employees on LinkedIn
   */
  @SpeakeasyMetadata()
  employeesInLinkedin: number;

  /**
   * The number of company followers on LinkedIn
   */
  @SpeakeasyMetadata()
  followers: number;

  /**
   * The year the company was founded
   */
  @SpeakeasyMetadata()
  founded: number;

  /**
   * The funding status of the company
   */
  @SpeakeasyMetadata()
  funding: string;

  /**
   * The country's headquarters
   */
  @SpeakeasyMetadata()
  headquarters: string;

  /**
   * The key for looking up the company
   */
  @SpeakeasyMetadata()
  id: number;

  /**
   * The company's industries
   */
  @SpeakeasyMetadata()
  industries: string;

  /**
   * The company's investors
   */
  @SpeakeasyMetadata()
  investors: string;

  /**
   * Sample of company's Jobs. See the jobs endpoint for the full list.
   */
  @SpeakeasyMetadata()
  jobs: string[];

  /**
   * The company's LinkedIn ID
   */
  @SpeakeasyMetadata()
  lid: string;

  /**
   * The company's locations
   */
  @SpeakeasyMetadata()
  locations: string[];

  /**
   * URL to the company's logo
   */
  @SpeakeasyMetadata()
  logo: string;

  /**
   * The company's name
   */
  @SpeakeasyMetadata()
  name: string;

  /**
   * The type of organization
   */
  @SpeakeasyMetadata()
  organizationType: string;

  /**
   * The comapny's headquarters region
   */
  @SpeakeasyMetadata()
  region: string;

  /**
   * Similar companies to this company
   */
  @SpeakeasyMetadata()
  similar: string[];

  /**
   * The company's slogan
   */
  @SpeakeasyMetadata()
  slogan: string;

  /**
   * The company's specialities
   */
  @SpeakeasyMetadata()
  specialities: string;

  /**
   * The company's sphere of products
   */
  @SpeakeasyMetadata()
  sphere: string;

  /**
   * The type of company (public, private, etc.)
   */
  @SpeakeasyMetadata()
  type: string;

  /**
   * The company's linkedIn URL
   */
  @SpeakeasyMetadata()
  url: string;

  /**
   * The company's website
   */
  @SpeakeasyMetadata()
  website: string;
}

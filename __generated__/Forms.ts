/* eslint-disable */

/* tslint:disable */

/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */
import {
  CreateFormDto,
  FormsControllerCreateData,
  FormsControllerFindAllData,
  FormsControllerFindOneByIdData,
  FormsControllerRemoveData,
} from './data-contracts';
import { ContentType, HttpClient, RequestParams } from './http-client';

export class Forms<
  SecurityDataType = unknown,
> extends HttpClient<SecurityDataType> {
  /**
   * No description
   *
   * @tags 2.2. Forms
   * @name FormsControllerCreate
   * @summary 폼 제출
   * @request POST:/forms/{schemaId}
   */
  formsControllerCreate = (
    schemaId: string,
    data: CreateFormDto,
    params: RequestParams = {},
  ) =>
    this.request<FormsControllerCreateData, void>({
      path: `/forms/${schemaId}`,
      method: 'POST',
      body: data,
      type: ContentType.Json,
      ...params,
    });
  /**
   * No description
   *
   * @tags 2.2. Forms
   * @name FormsControllerFindAll
   * @summary 모든 폼 조회
   * @request GET:/forms/{schemaId}
   */
  formsControllerFindAll = (schemaId: string, params: RequestParams = {}) =>
    this.request<FormsControllerFindAllData, void>({
      path: `/forms/${schemaId}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 2.2. Forms
   * @name FormsControllerFindOneById
   * @summary 폼 조회
   * @request GET:/forms/{schemaId}/{id}
   */
  formsControllerFindOneById = (
    schemaId: string,
    id: string,
    params: RequestParams = {},
  ) =>
    this.request<FormsControllerFindOneByIdData, void>({
      path: `/forms/${schemaId}/${id}`,
      method: 'GET',
      ...params,
    });
  /**
   * No description
   *
   * @tags 2.2. Forms
   * @name FormsControllerRemove
   * @summary 폼 삭제
   * @request DELETE:/forms/{id}
   */
  formsControllerRemove = (id: string, params: RequestParams = {}) =>
    this.request<FormsControllerRemoveData, void>({
      path: `/forms/${id}`,
      method: 'DELETE',
      ...params,
    });
}

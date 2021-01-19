/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { PublisherPublisherRead } from '../models/publisher-publisher-read';
import { PublisherPublisherWrite } from '../models/publisher-publisher-write';
@Injectable({
  providedIn: 'root',
})
class PublisherService extends __BaseService {
  static readonly getPublisherCollectionPath = '/api/publishers';
  static readonly postPublisherCollectionPath = '/api/publishers';
  static readonly getPublisherItemPath = '/api/publishers/{id}';
  static readonly putPublisherItemPath = '/api/publishers/{id}';
  static readonly deletePublisherItemPath = '/api/publishers/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Retrieves the collection of Publisher resources.
   * @param params The `PublisherService.GetPublisherCollectionParams` containing the following parameters:
   *
   * - `page`: The collection page number
   *
   * - `itemsPerPage`: The number of items per page
   *
   * @return Publisher collection response
   */
  getPublisherCollectionResponse(params: PublisherService.GetPublisherCollectionParams): __Observable<__StrictHttpResponse<Array<PublisherPublisherRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.itemsPerPage != null) __params = __params.set('itemsPerPage', params.itemsPerPage.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/publishers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<PublisherPublisherRead>>;
      })
    );
  }
  /**
   * Retrieves the collection of Publisher resources.
   * @param params The `PublisherService.GetPublisherCollectionParams` containing the following parameters:
   *
   * - `page`: The collection page number
   *
   * - `itemsPerPage`: The number of items per page
   *
   * @return Publisher collection response
   */
  getPublisherCollection(params: PublisherService.GetPublisherCollectionParams): __Observable<Array<PublisherPublisherRead>> {
    return this.getPublisherCollectionResponse(params).pipe(
      __map(_r => _r.body as Array<PublisherPublisherRead>)
    );
  }

  /**
   * Creates a Publisher resource.
   * @param publisher The new Publisher resource
   * @return Publisher resource created
   */
  postPublisherCollectionResponse(publisher?: PublisherPublisherWrite): __Observable<__StrictHttpResponse<PublisherPublisherRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = publisher;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/publishers`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PublisherPublisherRead>;
      })
    );
  }
  /**
   * Creates a Publisher resource.
   * @param publisher The new Publisher resource
   * @return Publisher resource created
   */
  postPublisherCollection(publisher?: PublisherPublisherWrite): __Observable<PublisherPublisherRead> {
    return this.postPublisherCollectionResponse(publisher).pipe(
      __map(_r => _r.body as PublisherPublisherRead)
    );
  }

  /**
   * Retrieves a Publisher resource.
   * @param id undefined
   * @return Publisher resource response
   */
  getPublisherItemResponse(id: string): __Observable<__StrictHttpResponse<PublisherPublisherRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/publishers/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PublisherPublisherRead>;
      })
    );
  }
  /**
   * Retrieves a Publisher resource.
   * @param id undefined
   * @return Publisher resource response
   */
  getPublisherItem(id: string): __Observable<PublisherPublisherRead> {
    return this.getPublisherItemResponse(id).pipe(
      __map(_r => _r.body as PublisherPublisherRead)
    );
  }

  /**
   * Replaces the Publisher resource.
   * @param params The `PublisherService.PutPublisherItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `publisher`: The updated Publisher resource
   *
   * @return Publisher resource updated
   */
  putPublisherItemResponse(params: PublisherService.PutPublisherItemParams): __Observable<__StrictHttpResponse<PublisherPublisherRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.publisher;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/publishers/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<PublisherPublisherRead>;
      })
    );
  }
  /**
   * Replaces the Publisher resource.
   * @param params The `PublisherService.PutPublisherItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `publisher`: The updated Publisher resource
   *
   * @return Publisher resource updated
   */
  putPublisherItem(params: PublisherService.PutPublisherItemParams): __Observable<PublisherPublisherRead> {
    return this.putPublisherItemResponse(params).pipe(
      __map(_r => _r.body as PublisherPublisherRead)
    );
  }

  /**
   * Removes the Publisher resource.
   * @param id undefined
   */
  deletePublisherItemResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/publishers/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<null>;
      })
    );
  }
  /**
   * Removes the Publisher resource.
   * @param id undefined
   */
  deletePublisherItem(id: string): __Observable<null> {
    return this.deletePublisherItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module PublisherService {

  /**
   * Parameters for getPublisherCollection
   */
  export interface GetPublisherCollectionParams {

    /**
     * The collection page number
     */
    page?: number;

    /**
     * The number of items per page
     */
    itemsPerPage?: number;
  }

  /**
   * Parameters for putPublisherItem
   */
  export interface PutPublisherItemParams {
    id: string;

    /**
     * The updated Publisher resource
     */
    publisher?: PublisherPublisherWrite;
  }
}

export { PublisherService }

/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService as __BaseService } from '../base-service';
import { ApiConfiguration as __Configuration } from '../api-configuration';
import { StrictHttpResponse as __StrictHttpResponse } from '../strict-http-response';
import { Observable as __Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { FeedFeedRead } from '../models/feed-feed-read';
import { FeedFeedWrite } from '../models/feed-feed-write';
@Injectable({
  providedIn: 'root',
})
class FeedService extends __BaseService {
  static readonly getFeedCollectionPath = '/api/feeds';
  static readonly postFeedCollectionPath = '/api/feeds';
  static readonly getFeedItemPath = '/api/feeds/{id}';
  static readonly putFeedItemPath = '/api/feeds/{id}';
  static readonly deleteFeedItemPath = '/api/feeds/{id}';

  constructor(
    config: __Configuration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Retrieves the collection of Feed resources.
   * @param params The `FeedService.GetFeedCollectionParams` containing the following parameters:
   *
   * - `publisher.id[]`:
   *
   * - `publisher.id`:
   *
   * - `page`: The collection page number
   *
   * - `itemsPerPage`: The number of items per page
   *
   * - `created`:
   *
   * @return Feed collection response
   */
  getFeedCollectionResponse(params: FeedService.GetFeedCollectionParams): __Observable<__StrictHttpResponse<Array<FeedFeedRead>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    (params.publisherId || []).forEach(val => {if (val != null) __params = __params.append('publisher.id[]', val.toString())});
    if (params.publisherId != null) __params = __params.set('publisher.id', params.publisherId.toString());
    if (params.page != null) __params = __params.set('page', params.page.toString());
    if (params.itemsPerPage != null) __params = __params.set('itemsPerPage', params.itemsPerPage.toString());
    if (params.created != null) __params = __params.set('created', params.created.toString());
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/feeds`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<Array<FeedFeedRead>>;
      })
    );
  }
  /**
   * Retrieves the collection of Feed resources.
   * @param params The `FeedService.GetFeedCollectionParams` containing the following parameters:
   *
   * - `publisher.id[]`:
   *
   * - `publisher.id`:
   *
   * - `page`: The collection page number
   *
   * - `itemsPerPage`: The number of items per page
   *
   * - `created`:
   *
   * @return Feed collection response
   */
  getFeedCollection(params: FeedService.GetFeedCollectionParams): __Observable<Array<FeedFeedRead>> {
    return this.getFeedCollectionResponse(params).pipe(
      __map(_r => _r.body as Array<FeedFeedRead>)
    );
  }

  /**
   * Creates a Feed resource.
   * @param feed The new Feed resource
   * @return Feed resource created
   */
  postFeedCollectionResponse(feed?: FeedFeedWrite): __Observable<__StrictHttpResponse<FeedFeedRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    __body = feed;
    let req = new HttpRequest<any>(
      'POST',
      this.rootUrl + `/api/feeds`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FeedFeedRead>;
      })
    );
  }
  /**
   * Creates a Feed resource.
   * @param feed The new Feed resource
   * @return Feed resource created
   */
  postFeedCollection(feed?: FeedFeedWrite): __Observable<FeedFeedRead> {
    return this.postFeedCollectionResponse(feed).pipe(
      __map(_r => _r.body as FeedFeedRead)
    );
  }

  /**
   * Retrieves a Feed resource.
   * @param id undefined
   * @return Feed resource response
   */
  getFeedItemResponse(id: string): __Observable<__StrictHttpResponse<FeedFeedRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/api/feeds/${encodeURIComponent(id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FeedFeedRead>;
      })
    );
  }
  /**
   * Retrieves a Feed resource.
   * @param id undefined
   * @return Feed resource response
   */
  getFeedItem(id: string): __Observable<FeedFeedRead> {
    return this.getFeedItemResponse(id).pipe(
      __map(_r => _r.body as FeedFeedRead)
    );
  }

  /**
   * Replaces the Feed resource.
   * @param params The `FeedService.PutFeedItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `feed`: The updated Feed resource
   *
   * @return Feed resource updated
   */
  putFeedItemResponse(params: FeedService.PutFeedItemParams): __Observable<__StrictHttpResponse<FeedFeedRead>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    __body = params.feed;
    let req = new HttpRequest<any>(
      'PUT',
      this.rootUrl + `/api/feeds/${encodeURIComponent(params.id)}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as __StrictHttpResponse<FeedFeedRead>;
      })
    );
  }
  /**
   * Replaces the Feed resource.
   * @param params The `FeedService.PutFeedItemParams` containing the following parameters:
   *
   * - `id`:
   *
   * - `feed`: The updated Feed resource
   *
   * @return Feed resource updated
   */
  putFeedItem(params: FeedService.PutFeedItemParams): __Observable<FeedFeedRead> {
    return this.putFeedItemResponse(params).pipe(
      __map(_r => _r.body as FeedFeedRead)
    );
  }

  /**
   * Removes the Feed resource.
   * @param id undefined
   */
  deleteFeedItemResponse(id: string): __Observable<__StrictHttpResponse<null>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'DELETE',
      this.rootUrl + `/api/feeds/${encodeURIComponent(id)}`,
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
   * Removes the Feed resource.
   * @param id undefined
   */
  deleteFeedItem(id: string): __Observable<null> {
    return this.deleteFeedItemResponse(id).pipe(
      __map(_r => _r.body as null)
    );
  }
}

module FeedService {

  /**
   * Parameters for getFeedCollection
   */
  export interface GetFeedCollectionParams {
    publisherId?: Array<number>;
    publisherId?: number;

    /**
     * The collection page number
     */
    page?: number;

    /**
     * The number of items per page
     */
    itemsPerPage?: number;
    created?: string;
  }

  /**
   * Parameters for putFeedItem
   */
  export interface PutFeedItemParams {
    id: string;

    /**
     * The updated Feed resource
     */
    feed?: FeedFeedWrite;
  }
}

export { FeedService }

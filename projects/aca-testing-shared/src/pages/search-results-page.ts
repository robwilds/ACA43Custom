/*!
 * Copyright © 2005-2023 Hyland Software, Inc. and its affiliates. All rights reserved.
 *
 * Alfresco Example Content Application
 *
 * This file is part of the Alfresco Example Content Application.
 * If the software was purchased under a paid Alfresco license, the terms of
 * the paid license agreement will prevail. Otherwise, the software is
 * provided under the following open source license terms:
 *
 * The Alfresco Example Content Application is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * The Alfresco Example Content Application is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Alfresco. If not, see <http://www.gnu.org/licenses/>.
 */

import { by } from 'protractor';
import { BrowsingPage } from './browsing-page';
import { SearchSortingPicker } from '../components/search/search-sorting-picker';
import { SearchFilters } from '../components/search/search-filters';
import { BrowserActions } from '@alfresco/adf-testing';

export class SearchResultsPage extends BrowsingPage {
  root = this.byCss('aca-search-results');
  sortingPicker = new SearchSortingPicker('aca-search-results');
  filters = new SearchFilters('aca-search-results');

  async waitForResults(): Promise<void> {
    await this.dataTable.waitForBody();
  }

  async getName(name: string): Promise<string> {
    return this.dataTable.getRowByName(name).element(by.css('[title="Name"] div.search-file-name')).getText();
  }

  async getDescription(name: string): Promise<string> {
    return this.dataTable.getRowByName(name).element(by.css('[title="Description"]')).getText();
  }

  async getModified(name: string): Promise<string> {
    return BrowserActions.getAttribute(this.dataTable.getRowByName(name).element(by.css('[title="Modified"] span')), 'title');
  }

  async getSize(name: string): Promise<string> {
    return this.dataTable.getRowByName(name).element(by.css('[title="Size"]')).getText();
  }

  async getModifiedBy(name: string): Promise<string> {
    return this.dataTable.getRowByName(name).element(by.css('[title="Modified by"]')).getText();
  }

  async getLocation(name: string): Promise<string> {
    return this.dataTable.getRowByName(name).element(by.css('[title="Name"] a')).getText();
  }
}

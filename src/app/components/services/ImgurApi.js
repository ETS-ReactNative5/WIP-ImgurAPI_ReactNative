import { API_URL, API_CLIENT_ID } from "@env";
import * as SecureStore from "expo-secure-store";
import React, { useState, useEffect } from 'react';

const sortSubmissionsEnum = { new: "newest", old: "oldest", worst: "worst", best: "best" };

export const getSubmissions = async (page = "0", sort = "newest") => {
    let user = await SecureStore.getItemAsync("user_name");
    try {
        let response = await fetch(API_URL + "3/account/" +
            user + "/submissions/" +
            page + "/" + sort, {
            method: 'GET',
            headers: {
                Accept: "application/json",
                Authorization: `Client-ID ${API_CLIENT_ID}`,
            },
            mode: '',
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

/* GET request gallery */
/**
 * Request imgur gallery
 * @param {string} section - Section requested: top, hot or user params
 * @param {string} sort  - Sorting filters
 * @param {string} window - Request daily,weekly or monthly gallery
 * @param {number} page - Page number requested
 * @param {boolean} showViral - Request viral content
 * @param {boolean} showMature - Request mature content
 */
export const getGallery = async (
    section = "hot",
    sort = "viral",
    window = "day",
    page = "0",
    showViral = "true",
    showMature = "true",
    albumPreview = "true") => {
    var _header = new Headers();
    _header.append("Authorization", `Client-ID ${API_CLIENT_ID}`)
    _header.append("Accept", "application/json")

    try {
        let response = await fetch(`${API_URL}3/gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}&showMature=${showMature}&album_preview=${albumPreview}`, {
            method: 'GET',
            headers: _header,
            mode: '',
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};

/* GET request gallery */
/**
 * Request imgur gallery search
 * @param {string} sort  - Sorting filters
 * @param {string} window - Request daily,weekly or monthly gallery
 * @param {number} page - Page number requested
 * @param {string} str - Research string
 */

export const getGallerySearchResult = async (
    sort,
    window,
    page,
    str) => {
    try {
        let response = await fetch(API_URL + "3/gallery/search/" +
            sort + "/" + window + "/" +
            page + "?q=" + str, {
            method: 'GET',
            headers: {
                Authorization: `Client-ID ${API_CLIENT_ID}`,
            },
            mode: '',
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
};


const upload = async (image) => {
    try {
        let response = await fetch(API_URL + "3/upload", {
            method: 'POST',
            headers: {
                Authorization: `Client-ID ${API_CLIENT_ID}`,
            },
            mode: '',
        });
        let json = await response.json();
        return json;
    } catch (error) {
        console.error(error);
    }
}

const addFavorite = () => {

}

const removeFavorite = () => {

}

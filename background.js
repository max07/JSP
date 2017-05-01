// Copyright (c) 2011 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
    // No tabs or host permissions needed!
    chrome.tabs.executeScript({
        file: 'jquery-3.1.1.min.js'
    }, function() {
        //     //Guaranteed to execute only after the previous script returns
        chrome.tabs.executeScript({
            file: 'hide.js'
        });
    });
});
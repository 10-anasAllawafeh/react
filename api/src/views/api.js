import React, { Component } from 'react';

function SearchByKeyword() {
    var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
    for(var i in results.items) {
      var item = results.items[i];
      Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
    }
    return results;
  };

  export default SearchByKeyword;
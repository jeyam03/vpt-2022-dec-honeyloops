# Venmurasu Programming Contest 

**Round 1** - Qualifier 
**Date** - Dec-31-2022

## Problem Statement
Create a web application to search books using API from [OpenLibrary](https://openlibrary.org) using a programming language of your choice.
The total duration will be 12hrs (8:00am - 8:00pm).

OpenLibrary offers suite of [APIs](https://openlibrary.org/developers/api) to access Book related information. Use the API to build a simple Book search application. The applicable APIs for this functionality:
* [Books](https://openlibrary.org/dev/docs/api/books) API - Retrieve a specific work or edition by identifier
* [Search](https://openlibrary.org/dev/docs/api/search) API - Search results for books, authors, and more

A sample search page is shown below. Your application need not use the same design but should have similar functionality. Like provide a keyword to search, display results, click on a search result to show more details, pagination.
![image](https://user-images.githubusercontent.com/410065/206938572-ebd9585e-e0b6-4120-81ea-14a49b840e0d.png)

Bonus points if additional functionality is implemented, e.g., faceted search

### Open Library Book API Samples 

#### Search API


**Syntax**
```
https://openlibrary.org/search.json?<query>
```

**Query Parameters**

* author - Author name

    http://openlibrary.org/search.json?author=tolkien
  
* title - Book title

    http://openlibrary.org/search.json?title=lord+of+the+rings
  
* subject - Subject

    http://openlibrary.org/search.json?subject=science+fiction
  
* publisher - Publisher

    http://openlibrary.org/search.json?publisher=harper+collins
  
* Language - French

    https://openlibrary.org/search.json?q=language%3Afre
  
* Author Birth Year - 1973

    https://openlibrary.org/search.json?q=birth_date:1973

**Important Response Fields**
    1. numFound - Total number of results
    2. docs - Array of results
    3. cover_i - Cover photo ID
    4. title - Book title
    5. author_name - Author name
    6. first_publish_year - First published year
    7. isbn - ISBN number
    8. Publisher - Publisher name
    9. Language Available - Array of languages available
    10. Subject - Array of subjects

#### Books API
This API is used to fetch the details of a particular book. The book can be identified by ISBN, OLID, LCCN, OCLC, or Open Library ID.

Syntax
```
https://openlibrary.org/<identifier>/<value>.json
```

Identifier and Value Samples

* ISBN - International Standard Book Number

    https://openlibrary.org/isbn/9780547928227.json

* Open Library ID
    
    https://openlibrary.org/books/OL26301924M.json

* Cover Photo
    
    https://covers.openlibrary.org/b/key/value-size.jpg

**Some Important Response Fields**
    1. title - Book title
    2. subtitle - Book subtitle
    3. description - Book description
    4. number_of_pages - Number of pages
    5. publish_date - Published date
    6. publish_places - Published place
    7. revision - Revision number



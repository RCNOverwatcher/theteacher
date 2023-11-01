import React from "react";

function A_binary_search_algorithm___a_more_detailed_explanation() {
  return (
    <div id="jsn-maincontent" class="span9 order1 row-fluid">
      <div id="jsn-maincontent_inner">
        <div id="jsn-centercol">
          <div id="jsn-centercol_inner">
            <div id="jsn-mainbody-content" class="jsn-hasmainbody">
              <div id="jsn-mainbody-content-inner1">
                <div id="jsn-mainbody-content-inner2">
                  <div id="jsn-mainbody-content-inner3">
                    <div id="jsn-mainbody-content-inner4" class="row-fluid">
                      <div
                        id="jsn-mainbody-content-inner"
                        class="span12 order1"
                      >
                        <div id="jsn-mainbody">
                          <div id="system-message-container"></div>

                          <div
                            class="item-page"
                            itemscope
                            itemtype="https://schema.org/Article"
                          >
                            <meta itemprop="inLanguage" content="en-GB" />

                            <div itemprop="articleBody">
                              <p></p>
                              <h1 style="text-align: center">
                                A binary search algorithm -&nbsp;a more detailed
                                explanation
                              </h1>
                              <p>
                                <strong
                                  class="NormalContentHeading"
                                  style="line-height: 1.5"
                                >
                                  A binary search
                                  <br />
                                </strong>
                                If you have read the simple explanation of what
                                a binary search is in our previous
                                article&nbsp;and are hungry for more, here is a
                                more detailed explanation!
                              </p>
                              <p>
                                This is a different approach to finding a
                                particular record. The idea is that you divide
                                all the records into two, a top half and a
                                bottom half. You then test to see which half the
                                record you want is in. Which ever half it isn't
                                in, you discard! So you are now left with only
                                half the original records. You then split that
                                half into two and repeat the process, until you
                                eventually find the record you want. Binary
                                searching will not work unless the records are
                                all in order! Of course, you could take a serial
                                file (one whose records are not in any
                                particular order) and sort them (which we call a
                                'sequential file') and then perform a binary
                                search on that file!
                              </p>

                              <p>
                                <strong class="NormalContentHeading">
                                  Advantages and disadvantages of serial
                                  searching compared to a binary search
                                </strong>
                                <br />
                                There are some advantages and disadvantages to
                                both approaches.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Compared to a binary search, serial
                                      searching is a very easy system to write a
                                      program for (start at the beginning and
                                      compare each record in turn until you find
                                      it).
                                    </li>
                                    <li>
                                      Serial searching isn’t very efficient.
                                      That's because it takes lots of
                                      comparisons to find a particular record in
                                      big files, compared to binary searching.
                                      It takes longer on average to find a
                                      record in a big file compared to binary
                                      searching.
                                    </li>
                                    <li>
                                      If you only have a very few records in a
                                      file then it makes little difference which
                                      method you use!
                                    </li>
                                    <li>
                                      Serial searching is excellent if your
                                      records are unordered. In binary
                                      searching, you will have to write code
                                      that puts records in order, before the
                                      binary search program can be used, or you
                                      won't be able to use binary searching at
                                      all. This will slow down processing and
                                      increase the complexity of the code,
                                      compared to serial searching.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong class="NormalContentHeading">
                                  Binary searching
                                </strong>
                                <br />
                                Binary searching is a programming method used to
                                search through data to find a particular item or
                                record.
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The data must be in order for binary
                                      searching to work.
                                    </li>
                                    <li>
                                      It takes far less comparisons than serial
                                      searching to find an item (for files that
                                      have more than a few items in them).
                                    </li>
                                    <li>
                                      Binary search algorithms are more
                                      complicated to write and understand than
                                      serial search algorithms.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong class="NormalContentHeading">
                                  Searching for a record using binary searching
                                </strong>
                                <br />
                                To illustrate how binary searching works, we
                                will look at an example. How would you search
                                for record number 3 within these records using
                                the binary search method? Remember, the
                                records&nbsp;
                                <strong>
                                  <span style="text-decoration: underline">
                                    must
                                  </span>
                                </strong>
                                &nbsp;be in order. If they are not, then they
                                must be put in order first using some code. In
                                the example below, the records are already in a
                                sequential order (using the records’ key
                                values).
                              </p>
                              <p align="center">
                                <img
                                  src="images/be996a41-20b7-4c2b-8cbd-5460a3b1d72aa.jpg"
                                  alt
                                />
                              </p>
                              <p align="left">
                                <strong>STEP 1:</strong>&nbsp;We set a flag to
                                indicate the first and last records. We’ll call
                                these Low and High.
                              </p>
                              <p>
                                <strong>STEP 2:</strong>&nbsp;We then work out
                                the Middle position. We can do this by
                                calculating:
                              </p>
                              <h1 class="NormalContent" align="center">
                                Trunc (Low + High) / 2
                              </h1>
                              <p align="left">
                                In our example, (1 + 10) / 2 = 5.5. Truncated,
                                5.5 equals 5, so our middle record is 5.
                              </p>
                              <p>
                                <strong>STEP 3:&nbsp;</strong>We first of all
                                test to see if Middle equals the value we are
                                looking for. If it does, we got lucky! We can
                                stop searching and report that the record has
                                been found.
                              </p>
                              <p>
                                <strong>STEP 4:</strong>&nbsp;If we didn’t get
                                lucky, we then ask ourselves, is the record we
                                are looking for (in our case, record 3), higher
                                or lower than the record pointed to by Middle?
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      If the record we want is above Middle,
                                      then we can discard all the records from
                                      Middle and below. We would then have about
                                      a half of the original number of records
                                      to search through.
                                    </li>
                                    <li>
                                      If the record we are looking for is below
                                      Middle, then we can discard all the
                                      records from Middle and above. We would
                                      then have about a half of the original
                                      number of records to search through.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                In our case, record 3 is less than record 5. We
                                can therefore discard all the records from
                                Middle up to High. We are now left with records
                                1 to 4 to search through.&nbsp; We then set the
                                new Low value to point to the first record. We
                                then set the new High value to point to the last
                                record as before, and work out the new Middle
                                (Trunc (1 + 4) / 2 = 2).
                              </p>
                              <p align="center">
                                <img
                                  src="images/1adf212e-74d7-4592-930f-2af2a9d6ec25b.jpg"
                                  alt
                                />
                              </p>
                              <p>
                                At this stage, we are now in exactly the same
                                position as we were at the start of the problem.
                                The only difference is that we have about half
                                the records to search through after just one
                                comparison! We can now call our binary search
                                function again (recursion) and perform the exact
                                same steps we have just done. The remaining
                                logic for finding record 3 goes like this:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Record 3 does not equal Middle (record 2).
                                    </li>
                                    <li>
                                      Record 3 is greater than Middle (record
                                      2).
                                    </li>
                                    <li>
                                      Discard all records from Middle and below.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>We are now left with the following records:</p>
                              <p align="center">
                                <img
                                  src="images/849a2406-3f79-4151-ab4c-bef25b6ffe7fc.jpg"
                                  alt
                                />
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Middle now equals Trunc ( 3 + 4 ) / 2 = 3.
                                    </li>
                                    <li>
                                      Record 3 equals Middle. Stop and report
                                      found.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>
                                  Searching for a record using binary searching
                                  – another example
                                </strong>
                                <br />
                                Suppose we want to search for record 10 in our
                                previous example.
                              </p>
                              <p align="center">
                                <img
                                  src="images/0db415c7-3a95-452f-9b55-eceb83f0e21bd.jpg"
                                  alt
                                />
                              </p>
                              <p align="center">
                                A file of records we wish to search through
                              </p>
                              <p align="left">The logic goes like this:</p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Record 10 is not equal to middle.</li>
                                    <li>
                                      Record 10 is greater than middle.
                                      Therefore, discard all records from Middle
                                      and below.
                                    </li>
                                    <li>Reset Low, High and Middle.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                We are now left with the following situation:
                              </p>
                              <p align="center">
                                <img
                                  src="images/316846fb-cd6c-43ca-ba79-9b7f6c156b11e.jpg"
                                  alt
                                />
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Record 10 is not equal to Middle.</li>
                                    <li>
                                      Record 10 is greater than Middle.
                                      Therefore, discard all records from Middle
                                      and below.
                                    </li>
                                    <li>Reset Low, High and Middle.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p>We are now left with this situation:</p>
                              <p align="center">
                                <img
                                  src="images/f8eaf2f7-0b41-49b6-99c9-e097905c42caf.jpg"
                                  alt
                                />
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Middle now equals Trunc ( 9 + 10 ) / 2 =
                                      9.
                                    </li>
                                    <li>Record 10 is not equal to Middle.</li>
                                    <li>
                                      Record 10 is greater than Middle.
                                      Therefore, discard all records from Middle
                                      and below.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p align="center">
                                <img
                                  src="images/2ba21de5-a800-40b3-9717-d2f5fa7334ebg.jpg"
                                  alt
                                />
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Reset Low, High and Middle.</li>
                                    <li>
                                      Record 10 is equal to Middle. Stop and
                                      report found.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <strong>
                                  Searching for a record using binary searching
                                  – another example
                                </strong>
                                <br />
                                Suppose we want to search for record 20 in our
                                previous example.
                              </p>
                              <p align="center">
                                <img
                                  src="images/de3d76f3-8282-4abd-aa20-385b5724fae9h.jpg"
                                  alt
                                />
                              </p>
                              <p align="center">
                                <strong>
                                  A file of records that we wish to search
                                  through.
                                </strong>
                              </p>
                              <p>The logic goes like this:</p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Record 20 is not equal to middle.</li>
                                    <li>
                                      Record 20 is greater than middle.
                                      Therefore, discard all records from Middle
                                      and below.
                                    </li>
                                    <li>Reset Low, High and Middle.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p align="center">
                                <img
                                  src="images/024d0297-2db4-4501-998b-8a3665e4c81ei.jpg"
                                  alt
                                />
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Record 20 is not equal to Middle.</li>
                                    <li>
                                      Record 20 is greater than Middle.
                                      Therefore, discard all records from Middle
                                      and below.
                                    </li>
                                    <li>Reset Low, High and Middle.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p align="center">
                                <img
                                  src="images/be374d15-6e19-49fb-96ee-f7238b3a14eej.jpg"
                                  alt
                                />
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      Middle now equals Trunc ( 9 + 10 ) / 2 =
                                      9.
                                    </li>
                                    <li>Record 20 is not equal to Middle.</li>
                                    <li>
                                      Record 20 is greater than Middle.
                                      Therefore, discard all records from Middle
                                      and below.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p align="center">
                                <img
                                  src="images/9316f8e0-ecda-4383-9ae7-1ed6c28a85a0k.jpg"
                                  alt
                                />
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Reset Low, High and Middle.</li>
                                    <li>Record 20 is not equal to Middle.</li>
                                    <li>Stop and report record not found.</li>
                                  </ul>
                                </li>
                              </ul>
                              <p></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default A_binary_search_algorithm___a_more_detailed_explanation;

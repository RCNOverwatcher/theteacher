import React from "react";

function Further_improvements_to_the_design_of_a_flat_file() {
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
                              <p>&nbsp;</p>
                              <h1 style="text-align: center">
                                Further improvements to the design of a flat
                                file
                              </h1>
                              <p>
                                <strong>
                                  Can we improve the design even further?
                                </strong>
                                <br />
                                We have solved some problems by splitting the
                                original flat file into two related tables. We
                                haven't solved all the problems, however. We
                                still have to record breed details over and over
                                again and we can't record a new breed in our
                                database unless there is a real dog of that
                                breed actually owned by someone! We could try
                                splitting up the dogs’ table into two, like
                                this:
                              </p>
                              <p>
                                <strong>
                                  <img
                                    style="
                                  vertical-align: middle;
                                  display: block;
                                  margin-left: auto;
                                  margin-right: auto;
                                "
                                    src="images/c7900112-2bcc-4e31-99f6-7ad6ff39a9bber2.JPG"
                                    alt="er2"
                                  />
                                </strong>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  Reading all of the relationships, we now have:
                                </span>
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>Each member can own many dogs.</li>
                                    <li>
                                      Each dog can be owned by only one owner.
                                    </li>
                                    <li>
                                      Each dog can be only one particular breed.
                                      (This is a dog club for pedigree dogs
                                      only!)
                                    </li>
                                    <li>
                                      Each breed can appear in many different
                                      dog records.
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p>
                                <span style="line-height: 1.5">
                                  As before, we can add some records to the
                                  tables to make ‘seeing’ what we have designed
                                  a little easier.
                                </span>
                              </p>
                              <p style="text-align: center">
                                <span style="line-height: 1.5">
                                  <img
                                    src="images/2a9a79d5-e1ff-41b1-8cb9-6aad95edae52table3.JPG"
                                    alt="table3"
                                  />
                                </span>
                              </p>
                              <p>
                                How is this relational database an even better
                                improvement over the flat file design? We can
                                add two more items to our list of improvements.
                              </p>
                              <ol>
                                <li>
                                  Each member’s details are now only stored
                                  once.
                                </li>
                                <li>
                                  Each dog is now identified by their own unique
                                  identity number.
                                </li>
                                <li>
                                  A new member now has their details entered
                                  into only one record, not multiple records.
                                </li>
                                <li>
                                  Changes to records need only be made in one
                                  place.
                                </li>
                                <li>
                                  Details that are to be deleted only need to be
                                  deleted from one record.
                                </li>
                                <li>
                                  We only need to store the details of each
                                  breed once.
                                </li>
                                <li>
                                  We can add a new breed to our database, even
                                  if a member has not acquired a dog of this
                                  breed yet.
                                </li>
                              </ol>
                              <p>
                                <strong>Summary</strong>
                                <br />
                                What we have seen is that flat files have their
                                uses for small databases. As the number of
                                records in a flat file increases, however, jobs
                                that used to be simple and quick start taking a
                                lot longer. There comes a time when it is much
                                better to consider breaking up one big file to
                                produce smaller tables that are related. These
                                types of databases are known as ‘relational
                                databases’. A useful technique to help the
                                designer achieve this is Entity-Relationship
                                modelling. We talk about producing an E-R
                                diagram for a particular database. E-R diagrams
                                show a database designer what tables they need
                                in a particular database and how those tables
                                are related to each other. E-R diagrams do not
                                in themselves show the designer what fields need
                                to go in each table. (The designer will produce
                                another document - a Data Dictionary - to record
                                this information.) As with any new computerised
                                system, an organisation needs to think carefully
                                before it goes ahead and installs a computerised
                                database.
                              </p>
                              <p>&nbsp;</p>
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

export default Further_improvements_to_the_design_of_a_flat_file;

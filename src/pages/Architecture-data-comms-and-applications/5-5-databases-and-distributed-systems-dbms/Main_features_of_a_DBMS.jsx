import React from "react";

function Main_features_of_a_DBMS() {
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
                                Main features of a DBMS
                              </h1>
                              <p>
                                <strong>Introduction</strong>
                                <br />
                                The DBMS is a complicated piece of software. It
                                can provide many functions.
                              </p>

                              <p>
                                <strong>Principal features of a DBMS.</strong>
                                <br />
                                The following list is not exhaustive but will
                                depend on the DBMS being used. I have tried to
                                include the ones that are commonly found in most
                                DBMSs.
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/22ff5684-f4b5-4209-95cf-f08e33ff50dcFunctions.GIF"
                                  alt="Functions"
                                />
                              </p>
                              <ul style="list-style-type: disc">
                                <li style="list-style-type: none">
                                  <ul style="list-style-type: disc">
                                    <li>
                                      The DBMS includes software to allow the
                                      creation of tables, and links between
                                      tables. This includes defining what pieces
                                      of information (fields) will be stored,
                                      their data types, validation rules and
                                      properties. This information is stored in
                                      a 'data dictionary', which is just a place
                                      to store metadata (data about data).
                                    </li>
                                    <li>
                                      The DBMS stores information about primary
                                      keys (the unique field in each database),
                                      foreign keys (which fields will be used to
                                      link tables together) and secondary keys
                                      (which fields will be used to set up extra
                                      search indexes, to speed up searching).
                                    </li>
                                    <li>
                                      <span style="line-height: 16.3636360168457px">
                                        The DBMS includes software
                                      </span>
                                      &nbsp;which ensure that the data integrity
                                      is maintained. If a record in Table 1
                                      refers to a record in Table 2, you don't
                                      want to be able to delete the record in
                                      Table 2. If you do, the record in Table 1
                                      will then be referring to a record that
                                      doesn't exist. The data integrity of the
                                      system will not be maintained. What should
                                      happen to maintain data integrity is that
                                      the record in Table 1 is deleted (or
                                      amended) and then the record in Table 2 is
                                      deleted.
                                    </li>
                                    <li>
                                      <span style="line-height: 16.3636360168457px">
                                        The DBMS includes software
                                      </span>
                                      &nbsp;to allow the setting up of users'
                                      accounts. This includes giving each user a
                                      login and password, defining user groups
                                      and putting users in appropriate groups.
                                    </li>
                                    <li>
                                      <span style="line-height: 16.3636360168457px">
                                        The DBMS includes software
                                      </span>
                                      &nbsp;for setting up the access rights and
                                      views for each group of users that has
                                      been defined.
                                    </li>
                                    <li>
                                      <span style="line-height: 16.3636360168457px">
                                        The DBMS includes software
                                      </span>
                                      &nbsp;to automatically back-up the
                                      database.
                                    </li>
                                    <li>
                                      <span style="line-height: 16.3636360168457px">
                                        The DBMS includes software
                                      </span>
                                      &nbsp;to create data input forms. These
                                      can be used to enter in records and to
                                      view records in the database. Wizards can
                                      be used to set-up the forms and then you
                                      can switch into a design view to customise
                                      them.
                                    </li>
                                    <li>
                                      <span style="line-height: 16.3636360168457px">
                                        The DBMS includes software that allows q
                                      </span>
                                      ueries to be designed and run. This allows
                                      data to be interrogated.
                                    </li>
                                    <li>
                                      Reports can be set-up. This allows the
                                      results of queries to be formatted
                                      'professionally' with a title, a data,
                                      meaningful headings, column widths set-up
                                      correctly, justification of results
                                      properly formatted, the addition of logos
                                      and so on.
                                    </li>
                                    <li>
                                      <span style="line-height: 16.3636360168457px">
                                        The DBMS includes software that allows m
                                      </span>
                                      acros to be designed and run, so that many
                                      often-repeated jobs can be automated.
                                    </li>
                                    <li>
                                      <span style="line-height: 16.3636360168457px">
                                        The DBMS includes software that
                                        allows&nbsp;
                                      </span>
                                      Switchboards and navigation methods to be
                                      set up. Large databases may have many
                                      forms and reports and after a while, it
                                      might get too complicated to find the
                                      form, query or report you are looking for.
                                      A switchboard is simply a welcome screen
                                      that you see when you open a database. It
                                      has a few buttons on, which take you to
                                      other menus and sub-menus. The idea is
                                      that you group on one menu similar jobs
                                      and provide links which open the forms and
                                      reports that carry out these jobs.
                                    </li>
                                    <li>
                                      <span style="line-height: 16.3636360168457px">
                                        The DBMS includes software
                                      </span>
                                      &nbsp;that allow system maintenance. For
                                      example, databases can 'grow' as temporary
                                      files are used and the data can get
                                      defragmented over time. Tools that deal
                                      with these kinds of problems are often
                                      provided.
                                    </li>
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

export default Main_features_of_a_DBMS;
import React from "react";

function Structured_Query_Language__SQL____selecting_data() {
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
                                Structured Query Language (SQL) - selecting data
                              </h1>
                              <p style="text-align: left">
                                <strong style="line-height: 1.5">
                                  <span class="NormalContentHeading">
                                    Using SELECT - FROM
                                    <br />
                                  </span>
                                </strong>
                                Write an SQL query using the following commands:
                              </p>

                              <p style="margin-left: 30px">
                                <strong>SELECT</strong> Name
                                <br />
                                <strong>FROM</strong> tblDogs;
                              </p>
                              <p>
                                Run the query (in Access, by pressing the
                                exclamation mark) and you should see a list of
                                the names of the dogs. To go back to SQL view,
                                simply right-click on the results of the query
                                and then select SQL view.
                              </p>
                              <p>
                                The <strong>SELECT</strong> command is used to
                                select columns to display in a table. The
                                <strong>FROM</strong> command is used to pick
                                the table(s) you want to get the columns from.
                                You can select more than one column from a table
                                and more than one table. Try running this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>SELECT</strong> Name, Type
                                <br />
                                <strong>FROM</strong> tblDogs;
                              </p>
                              <p>
                                You should see a list of names of dogs and their
                                types. Try this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>SELECT</strong> Name, Type, [Date of
                                Birth]
                                <br />
                                <strong>FROM</strong> tblDogs;
                              </p>
                              <p>
                                You should get a list of names of dogs, their
                                type and their data of birth. Note the use of
                                square brackets, used because the field name has
                                spaces in it. You can display all of the fields
                                in any particular table easily by using the
                                <strong>wildcard</strong> symbol, *. Try this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>SELECT</strong> *<br />
                                <strong>FROM</strong> tblDogs;
                              </p>
                              <p>
                                You will see all of the fields in all of the
                                records in the dog’s table displayed. You can
                                also display fields from more than one table in
                                the same query. Try this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>SELECT</strong> tblDogs.Name,
                                tblDogs.Type, tblOwners.Title, tblOwners.Surname
                                <br />
                                <strong>FROM</strong> tblOwners, tblDogs;
                              </p>
                              <p>
                                Notice the syntax in the SELECT statement. For
                                example <strong>tblOwners.Surname</strong> means
                                ‘go to the table called{" "}
                                <strong>tblOwners</strong> and get the column
                                called <strong>Surname’</strong>.
                              </p>
                              <p>
                                <strong>INNER JOIN</strong>
                                <br />
                                You can experiment in Access easily by designing
                                queries in QBE (Query By Example). QBE is the
                                graphical way of designing queries in Access.
                                You can check that they work and then switch to
                                SQL view to the SQL code (use the ‘design view’
                                icon under the FILE menu). You can also write
                                queries in SQL and then see the equivalent in
                                QBE. For example, if you design a query in QBE
                                to select the names of dogs and their types and
                                who owns them. When you convert this to SQL, you
                                will get the following:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>SELECT</strong> tblDogs.Name,
                                tblDogs.Type, tblOwners.Title, tblOwners.Surname
                                <br />
                                <strong>FROM</strong> tblOwners
                                <strong>INNER JOIN</strong> tblDogs
                                <strong>ON</strong> tblOwners.[Owner ID] =
                                tblDogs.[Owner ID];
                              </p>
                              <p>
                                This SQL code is different from the code we
                                successfully used in the previous example. The
                                relationship has been defined in the SQL code.
                                It is important to get into the habit of
                                defining the links between tables.
                                <strong>
                                  Take note of this example and use it in any
                                  future SQL queries where you need data from
                                  more than one table.
                                </strong>
                                If you don’t, you <em>may</em> get strange
                                results!
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Using SELECT - FROM - WHERE
                                  </span>
                                </strong>
                                <br />
                                You can search your tables according to some
                                criteria specified in the
                                <strong>WHERE</strong> statement. There are lots
                                of criteria you can use.
                              </p>
                              <p align="center">
                                <img
                                  src="images/1e096c26-088e-444e-8ac4-247a65f8a2a14.gif"
                                  alt
                                />
                              </p>
                              <p>
                                Note that dates in Access must be surround by
                                hash symbols. <strong>NULL</strong> does
                                <strong>not</strong> mean <strong>zero</strong>.
                                It means ‘no data’. There is a big difference!
                                There are other criteria! Try out the following
                                SQL queries. Remember to{" "}
                                <strong>predict </strong>the results{" "}
                                <em>before</em> you run the query, then
                                <strong>run</strong> the query and then
                                <strong>compare</strong> the prediction to the
                                results.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>SELECT</strong> [Name], [Type], [Date of
                                Birth]
                                <br />
                                <strong>FROM</strong> tblDogs
                                <br />
                                <strong>WHERE</strong> Type="Poodle"
                                <strong>OR</strong> Type="Spaniel"
                              </p>
                              <p style="margin-left: 30px">
                                <strong>SELECT</strong> Name, Type, [Date of
                                Birth]
                                <br />
                                <strong>FROM</strong> tblDogs
                                <br />
                                <strong>WHERE</strong> [Competition wins]
                                <strong>IS NULL</strong>;
                              </p>
                              <p style="margin-left: 30px">
                                <strong>SELECT </strong>tblDogs.Name,
                                tblDogs.Type, tblOwners.Title, tblOwners.Surname
                                <br />
                                <strong>FROM tblOwners INNER JOIN </strong>
                                tblDogs<strong> ON </strong>tblOwners.[Owner ID]
                                = tblDogs.[Owner ID]
                                <br />
                                <strong>WHERE</strong> Type="Poodle"
                                <strong>OR</strong> Type="Spaniel";
                              </p>
                              <p>
                                Don’t forget that if you are getting data from
                                more than one table then you should link them
                                properly in the <strong>FROM</strong> statement.
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Using SELECT - FROM - WHERE - ORDER BY
                                </strong>
                                <br />
                                You can sort the results easily, either in
                                ascending or descending order by any field. For
                                example:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>SELECT</strong> tblDogs.Name,
                                tblDogs.Type, tblOwners.Title, tblOwners.Surname
                                <br />
                                <strong>FROM</strong> tblOwners
                                <strong>INNER JOIN</strong> tblDogs
                                <strong>ON</strong> tblOwners.[Owner ID] =
                                tblDogs.[Owner ID]
                                <br />
                                <strong>WHERE</strong> Type="Poodle"
                                <strong>OR</strong> Type="Spaniel"
                                <br />
                                <strong>ORDER</strong>
                                <strong>BY</strong> tblOwners.Surname;
                              </p>
                              <p>
                                This will order the results in ascending order
                                by the owner’s surname. The reverse order can be
                                obtained like this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>ORDER BY</strong> tblOwners.Surname
                                <strong>DESC</strong>;
                              </p>
                              <p>
                                <strong class="NormalContentHeading">
                                  Using SELECT - SUM - AS - FROM - GROUP BY
                                </strong>
                                <br />
                                This command can be used to find the totals for
                                each unique entry in columns in tables. For
                                example, suppose you wanted to know how many
                                wins each unique owner in the dog club had in
                                total. You would do it like this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>SELECT</strong> tblDogs.[Owner ID],
                                <strong>Sum</strong>(tblDogs.[Competition wins])
                                <strong>AS</strong> [Total number of wins]
                                <br />
                                <strong>FROM</strong> tblDogs
                                <br />
                                <strong>GROUP</strong>
                                <strong>BY</strong> tblDogs.[Owner ID];
                              </p>
                              <p>
                                This SQL command adds up the competition wins
                                for each owner in the tblDogs table. It then
                                displays the total number of wins for each owner
                                under the heading ‘Total number of wins’.
                              </p>
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

export default Structured_Query_Language__SQL____selecting_data;

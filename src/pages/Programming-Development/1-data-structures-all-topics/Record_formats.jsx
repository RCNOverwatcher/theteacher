import React from "react";

function Record_formats() {
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
                              <h1 style="text-align: center">Record formats</h1>
                              <p class="NormalContent">
                                <strong>
                                  <span class="NormalContentHeading">
                                    Introduction
                                  </span>
                                </strong>
                                <br />A record is a collection of data items,
                                which usually have a variety of data types. A
                                typical use might be to store a range of details
                                about a pupil, or a range of details about a
                                book. Once you have defined (or 'declared') a
                                record, you can then declare variables to be of
                                that record type. Don't worry if that sounds
                                confusing! Let's look at an example.
                              </p>

                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Declaring a record
                                  </span>
                                </strong>
                                <br />
                                The first thing you would typically do in a
                                language is to define the record. Remember, we
                                are using pseudo-code here. The exact format of
                                the statements will depend on the language you
                                are using.
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <span class="NormalContentHeading">
                                    Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <br />
                                    Book =
                                    Record&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    '<br />
                                    &nbsp; &nbsp; &nbsp;Title , Author, ISBN :
                                    String;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    <br />
                                    &nbsp; &nbsp; &nbsp;Price : Real;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;
                                    <br />
                                    End record;
                                  </span>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                              </p>
                              <p>
                                The first line tells the language that we are
                                about to define our own data type (a record).
                                The second line says to call the new data type
                                Book. The next two lines defines what fields the
                                record will have. Title, author and ISBN will be
                                data type string. Price will be data type Real.
                                The new record definition is closed in the last
                                line. We now have a new data type called
                                Book.&nbsp;To use this new data type, we have to
                                declare a variable of that data type. That's
                                what we are doing in the next two lines:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  <span class="NormalContentHeading">
                                    Var
                                    <br />
                                    FirstBook : Book;&nbsp;&nbsp;&nbsp;
                                  </span>
                                  &nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;.
                                &nbsp;&nbsp;&nbsp;
                              </p>
                              <p class="NormalContent">
                                &nbsp;Note that if we wanted to store the
                                details about a second book, then we would been
                                to declare an additional variable, perhaps
                                called SecondBook.
                              </p>
                              <p>
                                <strong>
                                  <span class="NormalContentHeading">
                                    Writing data to a record
                                  </span>
                                </strong>
                                <br />
                                We can add some code now to write data into each
                                of the fields in the record. The format is this:
                              </p>
                              <p style="text-align: left; margin-left: 30px">
                                <strong>
                                  VariableName.Field :=
                                  data&nbsp;&nbsp;&nbsp;&nbsp;{" "}
                                </strong>
                                (e.g. FirstBook.Author := "J K Rowling";)
                              </p>
                              <p>
                                So, to add some details to our record, the code
                                would go something like this:
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  <span class="style2">Type</span>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  <span class="NormalContentHeading">
                                    Book = Record
                                  </span>
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  '
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;Title , Author, ISBN :
                                  String;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; &nbsp;Price : Real;
                                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  &nbsp;
                                </strong>
                                <br />
                                <strong>End record; &nbsp;&nbsp;</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>
                                  <span class="NormalContentHeading">Var</span>
                                </strong>
                                <br />
                                <strong>
                                  FirstBook : Book;
                                  <span class="ContentHeading">
                                    <br />{" "}
                                  </span>
                                  <span class="ContentHeading">
                                    <br />{" "}
                                  </span>
                                  Begin
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; FirstBook.Title := "Harry Potter
                                  and the Half blood Prince";
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; FirstBook.Author := "J K
                                  Rowling";
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; FirstBook.ISBN := "0747581088";
                                </strong>
                                <br />
                                <strong>
                                  &nbsp; &nbsp; Firstbook.Price := 10.99;
                                </strong>
                                <br />
                                <strong>End.</strong>
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                                align="left"
                              >
                                You now have some data in the variable
                                Firstbook.
                                <br />
                                <br />
                                <strong>
                                  <span class="NormalContentHeading">
                                    Reading from a record
                                  </span>
                                </strong>
                                <br />
                                Of course, from time to time, we will need to
                                get at the data, read from the record. This is
                                straightforward. <br />
                                <br />
                                <span class="NormalContentHeading">
                                  <strong>
                                    Type&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  </strong>
                                  <br />
                                  <strong>
                                    Book =
                                    Record&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    '
                                  </strong>
                                  <br />
                                  <strong>
                                    &nbsp; &nbsp; &nbsp;Title , Author, ISBN :
                                    String;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                  </strong>
                                  <br />
                                  <strong>
                                    &nbsp; &nbsp; &nbsp;Price : Real;
                                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                    &nbsp;
                                  </strong>
                                  <br />
                                  <strong>
                                    End record; &nbsp;&nbsp;&nbsp;
                                  </strong>
                                  <br />
                                  <strong>Var</strong>
                                  <br />
                                  <strong>FirstBook : Book;</strong>
                                  <br />
                                  <br />
                                  <strong>Begin</strong>
                                  <br />
                                  <strong>
                                    &nbsp; &nbsp; FirstBook.Title := "Harry
                                    Potter and the Half blood Prince";
                                  </strong>
                                  <br />
                                  <strong>
                                    &nbsp; &nbsp; FirstBook.Author := "J K
                                    Rowling";
                                  </strong>
                                  <br />
                                  <strong>
                                    &nbsp; &nbsp; FirstBook.ISBN :=
                                    "0747581088";
                                  </strong>
                                  <br />
                                  <strong>
                                    &nbsp; &nbsp; Firstbook.Price := 10.99;
                                  </strong>
                                  <br />
                                  <br />
                                  <strong>
                                    &nbsp; &nbsp; Writeln('The details of the
                                    book are as follows:');
                                  </strong>
                                  <br />
                                  <strong>&nbsp; &nbsp; Writeln;</strong>
                                  <br />
                                  <strong>
                                    &nbsp; &nbsp; Writeln('The book title is ',
                                    FirstBook.Title);
                                  </strong>
                                  <br />
                                  <strong>
                                    &nbsp; &nbsp; Writeln('The author is ',
                                    FirstBook.Author);
                                  </strong>
                                  <br />
                                  <strong>
                                    &nbsp; &nbsp; Writeln('The ISBN is ',
                                    FirstBook.ISBN);
                                  </strong>
                                  <br />
                                  <strong>
                                    &nbsp; &nbsp; Writeln('The price is ',
                                    FirstBook.Price);
                                  </strong>
                                  <br />
                                  <strong>&nbsp; &nbsp; Readln; </strong>
                                  <br />
                                  <strong>End.</strong>
                                </span>
                              </p>
                              <p>
                                Now we know how to declare a record. we know
                                that once a record is declared, you have to
                                declare a variable of that record data type. We
                                know the format for writing to a record's
                                fields. We know the format for reading from a
                                record's fields.
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

export default Record_formats;

import React from "react";

function intro_to_e_r_diagrams_one_to_one_relationships() {
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
                                One-to-one relationships
                              </h1>
                              <p>
                                <strong>
                                  Introduction
                                  <br />
                                </strong>
                                This type of relationship is shown with a simple
                                straight line. An example of this kind of
                                relationship is shown below:
                              </p>
                              <p>
                                <img
                                  style="
                                display: block;
                                margin-left: auto;
                                margin-right: auto;
                              "
                                  src="images/8c17f0de-a3bb-425a-a334-99f309361dader13.JPG"
                                  alt="er13"
                                />
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  <strong>
                                    Using one-to-one relationships
                                  </strong>
                                  <br />
                                  This kind of relationship is used to keep the
                                  database design compact and clear. For
                                  example, suppose you had a PRODUCT table for
                                  all products sold by a supermarket. Some of
                                  those products are CDs and some are, for
                                  example, fish! If you are keeping information
                                  (attributes) about the products, one possible
                                  set of attributes for the PRODUCT table might
                                  be the following:
                                </span>
                              </p>
                              <p style="text-align: center">
                                <span style="line-height: 1.5">
                                  <img
                                    src="images/320eab57-ac5b-4392-8ab1-b2922a69dccber15.JPG"
                                    alt="er15"
                                  />
                                </span>
                              </p>
                              <p>
                                <span style="line-height: 1.5">
                                  Of course, the number of attributes needed
                                  could be very large. This is because
                                  ‘products’ in a supermarket aren’t restricted
                                  just to CDs and fish. They will include items
                                  such as clothes, insurance, cars, fresh
                                  vegetables and so on. Each of these products
                                  will need their own specialist attributes. For
                                  example, you might need an attribute to hold
                                  the size of clothes. Clearly, as you fill out
                                  this table with records of each actual
                                  product, some of these attributes will be left
                                  blank. For example, if you entered the details
                                  for ABBA's greatest hits, the 'Fresh / frozen'
                                  attribute will need to be left blank! So not
                                  only will you have a table with a great many
                                  different attributes, many of them for a
                                  particular product will be left blank. This is
                                  not the clearest of designs! It would be
                                  better to split up the PRODUCT table into
                                  logical entities. One entity would be purely
                                  for CDs. One would be purely for fish. Another
                                  would be for clothes, and so on.
                                </span>
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/83b42c4b-d52c-4cc9-af82-2ae32cf57212er14.JPG"
                                  alt="er14"
                                />
                              </p>
                              <p style="text-align: center">&nbsp;</p>
                              <p style="text-align: left">
                                Now you can keep the common product information
                                in the PRODUCT table (like ID, Name, Price etc).
                                However,
                              </p>

                              <p style="text-align: left">
                                any specific information relating to a
                                particular product type would go in that
                                product’s table. For example, if you have an
                                ABBA CD for sale, the ID code, Name and Price
                                would go in the Product table. There would be
                                one entry in the CD_INFO table, where you would
                                put the CD length, year of recording and artist.
                                The result of using one-to-one relationships in
                                a database is a clearer design.
                              </p>
                              <p>
                                <strong>TASK 5</strong> &nbsp;Look at the
                                following diagram. Add verbs/phrases in the
                                correct places to help someone understand the
                                diagram. Note that some CDs might be
                                compilations of many groups’ songs, and some
                                tracks might appear on more than one CD. For
                                example, a track might appear on a compilation
                                CD and a greatest hits CD as well as the
                                original CD it was released on.
                              </p>
                              <p style="text-align: center">
                                <img
                                  src="images/13516a98-3d32-48c1-acfb-074ad073d47eer16.JPG"
                                  alt="er16"
                                />
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

export default intro_to_e_r_diagrams_one_to_one_relationships;
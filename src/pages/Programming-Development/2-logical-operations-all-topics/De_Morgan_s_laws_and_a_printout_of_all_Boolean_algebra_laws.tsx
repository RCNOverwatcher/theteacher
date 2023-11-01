import React from "react";

function De_Morgan_s_laws_and_a_printout_of_all_Boolean_algebra_laws() {
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
                                De Morgan's laws&nbsp;and a printout of all
                                Boolean algebra laws
                              </h1>
                              <p class="NormalContent">
                                <strong>
                                  <strong>
                                    Introduction
                                    <br />
                                  </strong>
                                </strong>
                                There are a number of rules in Boolean algebra
                                that help us derive and simplify statements.
                                Together these are known as De Morgan's rules.
                                In this section, we will discuss De Morgan's
                                rules. We will see how they are applied in
                                another section, with lots of examples. One use
                                for them that you will discover in another
                                section is that they can be used to simplify
                                NAND and NOR gates in logic gate designs.
                              </p>

                              <h3
                                class="NormalContent"
                                style="text-align: center"
                              >
                                <strong>
                                  An easy way to remember De Morgan's rules is
                                  that each term is complemented, and <br />
                                  then the ORs become ANDs, and the ANDs become
                                  ORs.
                                </strong>
                              </h3>
                              <p class="NormalContent">
                                Before we start looking at De Morgan's rules, we
                                need to know two terms, Conjunction and
                                Disjunction.
                              </p>
                              <p class="NormalContent">
                                <strong>Conjunction</strong>
                                <br />
                                Conjunction is very similar to the logic
                                operator AND. If all inputs are true then the
                                output is true. Else, the output is false. The
                                Boolean algebra symbol for conjunction
                                is&nbsp;Λ.
                              </p>
                              <p class="NormalContent">
                                <strong>Disjunction</strong>
                                <br />
                                Disjunction is very similar to the logic
                                operator OR. If any of the inputs are true, then
                                the output is true. Else, the output is
                                false.&nbsp;The Boolean algebra symbol for
                                conjunction is V.
                              </p>
                              <p class="NormalContent">
                                When we talk about something being 'true', we
                                can also talk about if being a 'one' or being
                                'high'. When we talk about something being
                                'false', we can also talk about a 'zero' or a
                                'low'. It is important to recognise that these
                                terms are used interchangeably both in our notes
                                as well as in books and online so it is
                                something to look out for.
                              </p>
                              <p class="NormalContent">
                                <strong>De Morgan's rules</strong>
                                <br />
                                <strong>
                                  1) The negation of a conjunction is the
                                  disjunction of the negation
                                </strong>
                                .
                              </p>
                              <p class="NormalContent">
                                This is quite a sentence! Perhaps it might be
                                better to say:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-left: 30px"
                              >
                                <strong>
                                  the complement of two or more ANDed variables
                                  is equivalent to the OR of the complements of
                                  the individual variables.
                                </strong>
                              </p>
                              <p class="NormalContent">
                                The following three lines all say the same
                                thing:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li class="NormalContent">
                                      <strong>
                                        the compliment of (A AND B) is the
                                        equivalent to the compliment of A OR the
                                        complement of B.
                                      </strong>
                                    </li>
                                    <li class="NormalContent">
                                      <strong>
                                        (A AND B)' ≡&nbsp;(A)' OR (B)'
                                      </strong>
                                    </li>
                                    <li class="NormalContent">
                                      <strong>
                                        (A&nbsp;Λ B)' ≡&nbsp;(A)' V (B)'
                                      </strong>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                When working with Boolean algebraic equations,
                                by far the most popular way of expressing this
                                equality would be:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li class="NormalContent">
                                      <strong>
                                        <span style="text-decoration: overline">
                                          AB
                                        </span>
                                        &nbsp;≡
                                        <span style="text-decoration: overline">
                                          A
                                        </span>
                                        +
                                        <span style="text-decoration: overline">
                                          B
                                        </span>
                                      </strong>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                According to OCR's specification, the symbol
                                they will use for the compliment is&nbsp;Λ so we
                                will try to use this as much as possible, too.
                                At the moment, this rule isn't going to mean
                                much, but if we have a look at our first
                                example, we can see this rule being applied and
                                that it does indeed work.
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/6469cf94-01b6-4fc4-9598-4bfb202f5cdedm1.GIF"
                                  alt="dm1"
                                />
                              </p>
                              <p class="NormalContent">
                                We have two inputs in our expression, which we
                                will call A and B. We'll put the different
                                combinations in the first two columns. The
                                'negation of the conjunction' is (A&nbsp;Λ B)'
                                and this will go in the third column. The
                                'disjunction of the negation' is in the fourth
                                column. Working through the expressions in the
                                third and fourth column, you can see that they
                                are indeed producing the same outputs so De
                                Morgan's first rule works.
                              </p>
                              <p class="NormalContent">
                                <strong style="line-height: 1.5">
                                  2) The negation of the disjunction is the
                                  conjunction of the negation.
                                </strong>
                              </p>
                              <p class="NormalContent" style="margin-top: 10px">
                                This is quite a sentence! Perhaps it might be
                                better to say:
                              </p>
                              <p
                                class="NormalContent"
                                style="margin-bottom: 10px; margin-left: 30px"
                              >
                                <strong>
                                  the complement of two or more ORed variables
                                  is equivalent to the AND of the complements of
                                  the individual variables
                                </strong>
                              </p>
                              <p class="NormalContent">
                                The following three lines all say the same
                                thing:
                              </p>
                              <ul>
                                <li style="list-style-type: none">
                                  <ul>
                                    <li class="NormalContent">
                                      <strong>
                                        The complement of (A OR B) is the
                                        equivalent to the complement of A AND
                                        the complement of B.
                                      </strong>
                                    </li>
                                    <li class="NormalContent">
                                      <strong>
                                        (A OR B)' ≡&nbsp;(A)' AND (B)'
                                      </strong>
                                    </li>
                                    <li class="NormalContent">
                                      <strong>
                                        (A V B)' ≡&nbsp;(A)'&nbsp;Λ (B)'
                                      </strong>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent" style="margin-top: 10px">
                                When working with Boolean algebraic equations,
                                by far the most popular way of expressing this
                                equality would be:
                              </p>
                              <ul style="margin-bottom: 10px">
                                <li style="list-style-type: none">
                                  <ul>
                                    <li class="NormalContent">
                                      <strong>
                                        <span style="text-decoration: overline">
                                          A + B
                                        </span>
                                        &nbsp;≡&nbsp;
                                        <span style="text-decoration: overline">
                                          A
                                        </span>
                                        &nbsp;.
                                        <span style="text-decoration: overline">
                                          B
                                        </span>
                                      </strong>
                                    </li>
                                  </ul>
                                </li>
                              </ul>
                              <p class="NormalContent">
                                According to OCR's specification, the symbol
                                they will use for the disjunction is&nbsp;V so
                                we will try to use this as much as possible,
                                too. At the moment, this rule isn't going to
                                mean much, but if we have a look at our first
                                example, we can see this rule being applied and
                                that it does indeed work.
                              </p>
                              <p class="NormalContent">
                                <img
                                  style="margin: 10px; vertical-align: middle"
                                  src="images/8d55b8bf-5c72-429c-ad5d-d37f9238dd23dm2.GIF"
                                  alt="dm2"
                                />
                              </p>
                              <p class="NormalContent">
                                We have two inputs in our expression, which we
                                will call A and B. We'll put the different
                                combinations in the first two columns. The
                                'negation of the disjunction' is&nbsp;(A&nbsp;V
                                B)' and this will go in the third column. The
                                'conjunction of the negation' is in the fourth
                                column. Working through the expressions in the
                                third and fourth column, you can see that they
                                are indeed producing the same outputs so De
                                Morgan's second rule works, too. Remember what
                                we said at the start:
                              </p>
                              <h3
                                class="NormalContent"
                                style="text-align: center"
                              >
                                <strong>
                                  An easy way to remember De Morgan's rules is
                                  that each term is complemented, and&nbsp;
                                  <br />
                                  then the ORs become ANDs, and the ANDs become
                                  ORs.
                                </strong>
                              </h3>
                              <p>
                                <a
                                  href="/images/OCR2015/Component01/1_4/summary.pdf"
                                  target="_blank"
                                >
                                  <img
                                    style="margin: 20px 20px 20px 0px; float: left"
                                    src="images/38164708-3052-4596-b3b0-e7b65a1fc830summary.GIF"
                                    alt="summary"
                                    width="130"
                                    height="168"
                                  />
                                </a>
                                <strong style="line-height: 16.3636360168457px">
                                  Summary of a all Boolean algebra laws
                                </strong>
                                <br />
                                You can download and print out a summary sheet
                                of all the laws and identities we have covered.
                                It includes the 12 basic laws, the commutative,
                                associative and distributive laws and De
                                Morgan's laws. You should always have a copy of
                                this summary on your table to refer to when
                                working on Boolean algebra, until you know them
                                all by heart!
                              </p>
                              <p>&nbsp;&nbsp;</p>
                              <p>&nbsp;</p>
                              <p>&nbsp;</p>
                              <p>&nbsp;</p>
                              <p>&nbsp;</p>
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

export default De_Morgan_s_laws_and_a_printout_of_all_Boolean_algebra_laws;
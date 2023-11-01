import React from "react";

function Verification() {
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
                              <h1 style="text-align: center">Verification</h1>
                              <p>
                                <strong style="line-height: 16.3636360168457px">
                                  Data verification
                                </strong>
                                <br style="line-height: 16.3636360168457px" />
                                <span style="line-height: 16.3636360168457px">
                                  Once sensible data has been entered,
                                  verification techniques should be employed.
                                  Verification is the process of checking that
                                  the sensible data entered is actually the data
                                  you want! For example, suppose you have a
                                  field NAME. You enter JONNS. This is valid
                                  data. But when you double check it, you
                                  realise that it should be JONES not JONNS. You
                                  can then correct it. This is verification.
                                  There are a number of verification methods in
                                  common use.
                                </span>
                              </p>

                              <p>
                                <strong>Re-type a value</strong>
                                <br />
                                This is commonly used when you set up or change
                                a password. You type in your password once, and
                                then you type it in a second time. If they both
                                match, then your password is accepted. If they
                                don't match, even though both entries are valid,
                                it is rejected and you are asked to try again.
                              </p>
                              <p>
                                <strong>Re-enter whole data files</strong>
                                <br />
                                This is used in data processing environments.
                                Operator A types in a set of paper-based orders,
                                for example. They are saved in a file, but not
                                entered into the database yet. When operator A
                                has finished typing in the orders, the
                                paper-based orders are passed to operator B. He
                                re-types them all in. As operator B types in an
                                order, it is checked by the software to see if
                                what he has typed in is the same as what is held
                                on file, what operator A typed in. If they are
                                the same, then the order is entered into the
                                database. If they are not the same, then an
                                error is flagged up and the order needs to be
                                carefully checked. Flagging up can be done in a
                                number of ways. The keyboard could 'beep'. An
                                error message could be displayed, or all of the
                                errors saved to file and an error report printed
                                out at the end of data entry. Although this may
                                seem a little long-winded, it is an important
                                method of verification for critical data, such
                                as for entering in data from passport
                                applications.
                              </p>
                              <p>
                                <strong>Reading back</strong>
                                <br />
                                When you book a holiday at a travel agent, you
                                give them all of your details and they type them
                                into their computer. They can verify that your
                                details are correct simply by reading them back
                                to you and asking you if they're correct!
                                Sometimes, organisations need you to confirm
                                some details they have given you. In this case,
                                they may print out what you told them on a form
                                and then ask you to confirm the details, sign
                                and return it. If you have ever ordered anything
                                over the phone, then you will know that after
                                you have placed your order, the operator will
                                read it back and ask you to confirm that the
                                order is correct.
                              </p>
                              <p>
                                <strong>
                                  Tick the box and click to proceed
                                </strong>
                                <br />
                                If you buy something on the Internet, you will
                                typically place an order by typing it into a
                                form. The order will then be prepared, possibly
                                rearranged and then displayed back to you on the
                                screen. You will be asked to check it carefully,
                                tick a CONFIRM button and then click a PROCEED
                                button (or variations of this procedure). This
                                procedure is another example of a verification
                                method. Indeed, it may be followed up with a
                                confirmation email, which is a further method of
                                verification.
                              </p>
                              <p>
                                <strong>Remember:</strong>
                              </p>
                              <p style="margin-left: 30px">
                                <strong>Data validation:</strong>
                                <br />
                                Automatic checking that the data you entered is
                                sensible in that it follows the rules you set up
                                for the data when entered into a computer.
                              </p>
                              <p style="margin-left: 30px">
                                <strong>Data verification:</strong>
                                <br />
                                Manual and / or automatic checking that the
                                sensible data you entered is actually the data
                                you meant to enter in the first place!
                              </p>
                              <p>
                                <strong style="line-height: 1.5">
                                  A database can still become corrupt
                                </strong>
                                <br />
                                It should be recognised that even with clever
                                validation and verification techniques in place,
                                the data entered into a database could still be
                                compromised. For example, it is possible that
                                both operators during validation entered in the
                                same, but wrong, data - perhaps they both
                                misunderstood the handwriting on the paper-based
                                forms. It is possible that both operators
                                entered in the information on the form, but the
                                information on the form was wrong! Even with the
                                best methods of validation and verification in
                                place, data can still be compromised.
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

export default Verification;

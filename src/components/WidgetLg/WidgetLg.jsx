import React from "react";
import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Transaction</h3>
      <table className="widgetLgTable">
        <tr className="widgetlgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Doe</span>
          </td>
          <td className="widgetLgDate">2 Jun 22</td>
          <td className="widgetLgAmount">$1500.0</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://thumbs.dreamstime.com/b/handsome-man-black-suit-white-shirt-posing-studio-attractive-guy-fashion-hairstyle-confident-man-short-beard-125019349.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Doe</span>
          </td>
          <td className="widgetLgDate">2 Jun 22</td>
          <td className="widgetLgAmount">$1500.0</td>
          <td className="widgetLgStatus">
            <Button type="Success" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://image.shutterstock.com/image-photo/image-happy-brunette-man-wearing-260nw-1489874846.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Doe</span>
          </td>
          <td className="widgetLgDate">2 Jun 22</td>
          <td className="widgetLgAmount">$1500.0</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://image.shutterstock.com/image-photo/image-happy-brunette-man-wearing-260nw-1489874846.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Doe</span>
          </td>
          <td className="widgetLgDate">2 Jun 22</td>
          <td className="widgetLgAmount">$1500.0</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://image.shutterstock.com/image-photo/image-happy-brunette-man-wearing-260nw-1489874846.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">John Doe</span>
          </td>
          <td className="widgetLgDate">2 Jun 22</td>
          <td className="widgetLgAmount">$1500.0</td>
          <td className="widgetLgStatus">
            <Button type="Success" />
          </td>
        </tr>
      </table>
    </div>
  );
}

import { useState } from "react";

const leftTree = {
  Dashboard: [],
  Customize: ["Navbar", "Sliders", "Sections", "Review", "Category"],
  Products: ["Add Product", "View Products", "Inventory", "Categories"],
};

const rightTree = {
  Customers: [],
  Orders: ["All Orders", "Drafts", "Abandoned Checkouts"],
  Discounts: [],
  "User & Permission": [],
};

export default function StaffPermissions() {
  const [checked, setChecked] = useState({});

  const toggleItem = (name, children = []) => {
    const isChecked = !!checked[name];
    const newChecked = { ...checked, [name]: !isChecked };

    // Toggle all children with parent
    children.forEach((child) => {
      newChecked[child] = !isChecked;
    });

    setChecked(newChecked);
  };

  const toggleChild = (parent, child, siblings) => {
    const newChecked = { ...checked, [child]: !checked[child] };

    const allChecked = siblings.every((s) =>
      s === child ? !checked[child] : newChecked[s]
    );

    newChecked[parent] = allChecked;

    setChecked(newChecked);
  };

  const renderTree = (tree) => {
    return Object.entries(tree).map(([parent, children]) => (
      <div key={parent} className="space-y-2">
        {/* Parent */}
        <label className="flex items-center gap-2 text-xs sm:text-sm text-gray-700 font-medium">
          <input
            type="checkbox"
            checked={!!checked[parent]}
            onChange={() => toggleItem(parent, children)}
          />
          {parent}
        </label>

        {/* Children */}
        {children.length > 0 && (
          <div className="ml-4 sm:ml-6 space-y-2">
            {children.map((child) => (
              <label
                key={child}
                className="flex items-center gap-2 text-xs sm:text-sm text-gray-500"
              >
                <input
                  type="checkbox"
                  checked={!!checked[child]}
                  onChange={() => toggleChild(parent, child, children)}
                />
                {child}
              </label>
            ))}
          </div>
        )}
      </div>
    ));
  };

  return (
    <div className="bg-[#F0F5F9] rounded-lg p-4 sm:p-6 mt-4 sm:mt-6">
      <h2 className="text-sm sm:text-md font-semibold mb-3 sm:mb-4">
        Staff Permissions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {/* LEFT SIDE */}
        <div className="space-y-4">{renderTree(leftTree)}</div>

        {/* RIGHT SIDE */}
        <div className="space-y-4">{renderTree(rightTree)}</div>
      </div>
    </div>
  );
}

---
itemId: req-managing-items
itemType: Requirement
itemHasParent: WGT-2
---

# Managing items in Ketryx

## Introduction

Ketryx shall support the following transition flows:

- **Draft** -> **In Review** -> **Approved** -> **Released**
- **Draft** -> **In Review** -> **Rejected**
- **Draft** -> **In Review** -> **Approved** -> **Released** -> **Closed**
- - **Draft** -> **In Review** -> **Approved**
- - - **Draft** -> **In Review** -> **Rejected**

After the transition flow is completed, the item shall be locked for editing and the latest state shall be synced back to Jira.
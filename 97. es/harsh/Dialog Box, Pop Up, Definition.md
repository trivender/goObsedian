---
keywords: Dialog Box
image: "![[image (7).png]]"
---
![[image (7).png]]

This code help us to add dialog box on a specific word.

```javascript
/** On Word **/
<span class="model-dialog" data-toggle="modal" data-target="#annex1">Annex 1</span>

/** Below question text **/
<!-- Modal -->
<div class="modal fade" id="annex1" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
         <center><h3 class="modal-title">Annex 1</h3></center>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        fsdafasdfadsfasd
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>


```